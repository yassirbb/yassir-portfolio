import {
  dictionaries,
  type Dictionary
} from "./dictionaries";
import type { Locale } from "./config";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
