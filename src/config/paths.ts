export const paths = {
  routes: {
    root: "/",
    home: "",
    about: "/about",
    projects: "/projects",
    contact: "/contact",
    sitemap: "/sitemap.xml"
  },
  anchors: {
    mainContent: "#main-content",
    featuredProjects: "#featured-projects"
  },
  documents: {
    resume: "/documents/yassir-ben-boubker-cv.pdf"
  },
  images: {
    logo: "/yb-logo.webp",
    socialPreview: "/images/social/portfolio-preview.webp",
    projects: {
      centreonMap:
        "/images/projects/centreon-map-brand.svg",
      bamSimulation:
        "/images/projects/centreon-bam-brand.svg",
      equipmentTransport:
        "/images/projects/equipment-transport-brand.svg",
      portfolio: "/images/projects/developer-portfolio.webp",
      socialMediaClone:
        "/images/projects/social-media-clone.svg",
      flappyBirdClone:
        "/images/projects/flappy-bird-clone.svg"
    }
  },
  external: {
    site: "https://ybenboubker.dev",
    github: "https://github.com/Yassir-BenBOUBKER",
    linkedin:
      "https://ma.linkedin.com/in/yassir-benboubker/fr",
    whatsapp: "https://wa.me/212643009846",
    projects: {
      portfolioRepository:
        "https://github.com/Yassir-BenBOUBKER/portfolio",
      portfolioLive: "https://your-portfolio-domain.com",
      flappyBirdRepository:
        "https://github.com/yassirbb/Flappy-Clone",
      flappyBirdArticle:
        "https://medium.com/@yassirbb/build-your-own-flappy-bird-clone-with-html-css-javascript-85cf61b97cf4"
    }
  },
  documentation: {
    centreon: {
      host: "https://docs.centreon.com",
      map: "/docs/graph-views/introduction-map/",
      bam: "/docs/service-mapping/introduction/"
    }
  }
} as const;

export function createMailto(
  email: string,
  query?: URLSearchParams
) {
  const baseUrl = `mailto:${email}`;
  return query ? `${baseUrl}?${query.toString()}` : baseUrl;
}
