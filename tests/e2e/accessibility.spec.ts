import AxeBuilder from "@axe-core/playwright";
import {
  expect,
  type Page,
  test
} from "@playwright/test";

const auditedPages = [
  { name: "home", path: "/en" },
  { name: "about", path: "/en/about" },
  { name: "projects", path: "/en/projects" },
  { name: "contact", path: "/en/contact" },
  { name: "404", path: "/en/not-found-test" }
];

async function waitForHydration(
  page: Page,
  selector = ".site-header"
) {
  await page.waitForFunction(
    (targetSelector) => {
      const element =
        document.querySelector(targetSelector);

      return (
        element &&
        Object.keys(element).some((key) =>
          key.startsWith("__reactProps$")
        )
      );
    },
    selector
  );
}

async function expectNoAxeViolations(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags([
      "wcag2a",
      "wcag2aa",
      "wcag21a",
      "wcag21aa"
    ])
    .analyze();

  expect(
    results.violations,
    results.violations
      .map(
        (violation) =>
          `${violation.id}: ${violation.help}`
      )
      .join("\n")
  ).toEqual([]);
}

for (const auditedPage of auditedPages) {
  test(`${auditedPage.name} has no detectable WCAG A/AA violations`, async ({
    page
  }) => {
    await page.goto(auditedPage.path);
    await expectNoAxeViolations(page);
  });
}

test("mobile menu remains accessible while open", async ({
  page
}) => {
  await page.setViewportSize({
    width: 390,
    height: 844
  });
  await page.goto("/en");
  await waitForHydration(page);

  await page.getByRole("button", {
    name: "Open navigation"
  }).click();

  await expect(
    page.getByRole("link", {
      name: "Home",
      exact: true
    })
  ).toBeFocused();
  await expect(page.locator("main")).toHaveAttribute(
    "inert",
    ""
  );
  await expectNoAxeViolations(page);

  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", {
      name: "Open navigation"
    })
  ).toBeFocused();
});

test("form errors remain accessible after validation", async ({
  page
}) => {
  await page.goto("/en/contact");
  await waitForHydration(page, "#contact-form");

  await page.getByRole("button", {
    name: "Send message"
  }).click();

  await expect(page.locator("#contact-name")).toBeFocused();
  await expect(page.locator("#contact-name")).toHaveAttribute(
    "aria-invalid",
    "true"
  );
  await expectNoAxeViolations(page);
});

test("external links announce their behavior", async ({
  page
}) => {
  await page.goto("/en");

  const externalLinks = page.locator(
    'a[target="_blank"]'
  );
  const count = await externalLinks.count();

  expect(count).toBeGreaterThan(0);

  for (let index = 0; index < count; index += 1) {
    const link = externalLinks.nth(index);

    await expect(link).toHaveAttribute(
      "rel",
      /noopener/
    );
    await expect(link).toHaveAccessibleName(
      /opens in a new tab/i
    );
  }
});

test("primary navigation works without a mouse", async ({
  page
}) => {
  await page.goto("/en/about");
  await waitForHydration(page);

  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", {
      name: "Skip to main content"
    })
  ).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", {
      name: "Go to homepage"
    })
  ).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", {
      name: "Home",
      exact: true
    })
  ).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/en$/);
});
