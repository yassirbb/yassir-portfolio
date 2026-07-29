import { describe, expect, it } from "vitest";

import { dictionaries } from "@/i18n/dictionaries";

function getTranslationKeys(
  value: unknown,
  parentKey = "",
): string[] {
  if (
    value === null ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    return [];
  }

  return Object.entries(value).flatMap(([key, childValue]) => {
    const translationKey = parentKey ? `${parentKey}.${key}` : key;

    return [
      translationKey,
      ...getTranslationKeys(childValue, translationKey),
    ];
  });
}

describe("translation dictionaries", () => {
  it("uses exactly the same keys for English and French", () => {
    const englishKeys = getTranslationKeys(dictionaries.en).sort();
    const frenchKeys = getTranslationKeys(dictionaries.fr).sort();

    expect(frenchKeys).toEqual(englishKeys);
  });
});
