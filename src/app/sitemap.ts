import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { paths } from "@/config/paths";
import { locales, localizePath } from "@/i18n/config";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency:
    | "weekly"
    | "monthly"
    | "yearly";
};

const routes: SitemapRoute[] = [
  {
    path: paths.routes.home,
    priority: 1,
    changeFrequency: "monthly"
  },
  {
    path: paths.routes.about,
    priority: 0.8,
    changeFrequency: "monthly"
  },
  {
    path: paths.routes.projects,
    priority: 0.9,
    changeFrequency: "monthly"
  },
  {
    path: paths.routes.contact,
    priority: 0.8,
    changeFrequency: "yearly"
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.url}${localizePath(locale, route.path)}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((language) => [
            language,
            `${siteConfig.url}${localizePath(language, route.path)}`
          ])
        )
      }
    }))
  );
}
