import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

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
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}