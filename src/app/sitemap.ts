import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";

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
    path: "",
    priority: 1,
    changeFrequency: "monthly"
  },
  {
    path: "/about",
    priority: 0.8,
    changeFrequency: "monthly"
  },
  {
    path: "/projects",
    priority: 0.9,
    changeFrequency: "monthly"
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "yearly"
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.url}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((language) => [
            language,
            `${siteConfig.url}/${language}${route.path}`
          ])
        )
      }
    }))
  );
}
