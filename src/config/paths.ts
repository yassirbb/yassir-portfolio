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
      centreonMap: "/images/projects/centreon-map.webp",
      bamSimulation: "/images/projects/bam-simulation.webp",
      portfolio: "/images/projects/developer-portfolio.webp",
      reactLearning:
        "/images/projects/react-learning-project.webp"
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
      reactLearningRepository:
        "https://github.com/Yassir-BenBOUBKER/react-learning-project",
      reactLearningArticle:
        "https://medium.com/@your-profile/react-learning-project"
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
