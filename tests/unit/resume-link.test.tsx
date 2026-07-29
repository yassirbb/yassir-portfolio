import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "@/components/About/Hero/Hero";
import { paths } from "@/config/paths";
import { dictionaries } from "@/i18n/dictionaries";

describe("localized resume link", () => {
  it.each(["en", "fr"] as const)(
    "uses the %s resume and opens it in a new tab",
    (locale) => {
      render(
        <Hero
          locale={locale}
          copy={dictionaries[locale].about}
          common={dictionaries[locale].common}
        />
      );

      const link = screen.getByRole("link", {
        name: new RegExp(
          dictionaries[locale].about.downloadCv,
          "i"
        )
      });

      expect(link).toHaveAttribute(
        "href",
        paths.documents.resume[locale]
      );
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute(
        "rel",
        "noopener noreferrer"
      );
    }
  );
});
