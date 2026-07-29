import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { paths } from "@/config/paths";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: paths.routes.root
    },

    sitemap:
      `${siteConfig.url}${paths.routes.sitemap}`,

    host: siteConfig.url
  };
}
