import type { Locale } from "@/i18n/config";

export type LocalizedSource<T> = T & {
  translations?: Partial<
    Record<Locale, Partial<T>>
  >;
};

export function localizeItems<T>(
  items: readonly LocalizedSource<T>[],
  locale: Locale
): T[] {
  return items.map(({ translations, ...item }) => ({
    ...item,
    ...translations?.[locale]
  })) as T[];
}
