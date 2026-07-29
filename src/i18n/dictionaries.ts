import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

type Widen<T> =
  T extends string ? string :
  T extends readonly (infer U)[] ? readonly Widen<U>[] :
  T extends object ? { readonly [K in keyof T]: Widen<T[K]> } :
  T;

type DictionaryShape = Widen<typeof en>;

export type Dictionary = DictionaryShape;
export const dictionaries = {
  en,
  fr,
} satisfies Record<string, DictionaryShape>;
