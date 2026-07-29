import { paths } from "./paths";

export const siteConfig = {
  name: "Yassir Ben Boubker",

  title: "Yassir Ben Boubker — Frontend Engineer",

  description:
    "Frontend Engineer based in Morocco, specializing in React, TypeScript, and enterprise web interfaces.",

  url: paths.external.site,

  locale: "en_MA",

  author: {
    name: "Yassir Ben Boubker",
    email: "benboubker.yassir@gmail.com"
  },

  social: {
    github: paths.external.github,
    linkedin: paths.external.linkedin
  },
  images: {
    social: paths.images.socialPreview,
  }
} as const;
