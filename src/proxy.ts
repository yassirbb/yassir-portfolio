import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  defaultLocale,
  isLocale,
  type Locale
} from "@/i18n/config";

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("portfolio-language")?.value;
  if (saved && isLocale(saved)) return saved;

  const language = request.headers
    .get("accept-language")
    ?.toLowerCase();

  return language?.startsWith("fr") ? "fr" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-icon.png|robots.txt|sitemap.xml|images|documents|en(?:/|$)|fr(?:/|$)|.*\\..*).*)"
  ]
};
