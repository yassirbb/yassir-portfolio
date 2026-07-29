"use client";

import { useParams } from "next/navigation";

import { NotFoundContent } from "@/components/NotFound/NotFoundContent";
import {
  defaultLocale,
  isLocale,
  type Locale
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function LocalizedNotFound() {
  const params = useParams<{ locale?: string }>();
  const localeParam = params.locale ?? "";
  const locale: Locale = isLocale(localeParam)
    ? localeParam
    : defaultLocale;

  return (
    <NotFoundContent
      locale={locale}
      copy={getDictionary(locale).notFound}
    />
  );
}
