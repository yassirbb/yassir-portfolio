import {
  expect,
  type Page,
  test
} from "@playwright/test";

async function waitForHydration(
  page: Page,
  selector: string
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

test("changes language while keeping the current route", async ({
  page
}) => {
  await page.goto("/en/about");
  await waitForHydration(page, ".site-header");

  await page.getByRole("link", {
    name: "Switch to French"
  }).click();

  await expect(page).toHaveURL(/\/fr\/about$/);
  await expect(page.locator("html")).toHaveAttribute(
    "lang",
    "fr"
  );

  await page.getByRole("link", {
    name: "Passer en anglais"
  }).click();

  await expect(page).toHaveURL(/\/en\/about$/);
});

test("navigates through the primary navigation", async ({
  page
}) => {
  await page.goto("/en");
  await waitForHydration(page, ".site-header");

  await page.getByRole("link", {
    name: "About",
    exact: true
  }).click();
  await expect(page).toHaveURL(/\/en\/about$/);

  await page.getByRole("link", {
    name: "Projects",
    exact: true
  }).click();
  await expect(page).toHaveURL(/\/en\/projects$/);

  await page.getByRole("link", {
    name: "Contact",
    exact: true
  }).click();
  await expect(page).toHaveURL(/\/en\/contact$/);
});

test("uses the resume that matches the current language", async ({
  page
}) => {
  await page.goto("/en/about");

  await expect(
    page.getByRole("link", {
      name: /Download CV/
    })
  ).toHaveAttribute(
    "href",
    "/documents/yassir-ben-boubker-cv-en.pdf"
  );

  await page.goto("/fr/about");

  await expect(
    page.getByRole("link", {
      name: /Télécharger le CV/
    })
  ).toHaveAttribute(
    "href",
    "/documents/yassir-ben-boubker-cv-fr.pdf"
  );
});

test("validates the contact form and focuses the first error", async ({
  page
}) => {
  await page.goto("/en/contact");
  await waitForHydration(page, "#contact-form");

  await page.getByRole("button", {
    name: "Send message"
  }).click();

  await expect(page.locator("#contact-name")).toBeFocused();
  await expect(
    page.locator(".contact-form-feedback")
  ).toContainText(
    "Please correct the highlighted fields."
  );
});

test("supports skip navigation with the keyboard", async ({
  page
}) => {
  await page.goto("/en");
  await waitForHydration(page, ".site-header");

  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", {
    name: "Skip to main content"
  });
  await expect(skipLink).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("keeps keyboard focus inside the mobile menu", async ({
  page
}) => {
  await page.setViewportSize({
    width: 390,
    height: 844
  });
  await page.goto("/en");
  await waitForHydration(page, ".site-header");

  const menuButton = page.getByRole("button", {
    name: "Open navigation"
  });
  await menuButton.click();

  await expect(
    page.getByRole("link", {
      name: "Home",
      exact: true
    })
  ).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(menuButton).toBeFocused();
  await expect(menuButton).toHaveAttribute(
    "aria-expanded",
    "false"
  );
});
