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
    githubYassirbb: "https://github.com/yassirbb",
    linkedin:
      "https://ma.linkedin.com/in/yassir-benboubker/fr",
    whatsapp: "https://wa.me/212643009846",
    credentials: {
      courseraHtmlCssJavaScript:
        "https://www.coursera.org/account/accomplishments/certificate/JSFBNUZ3H7HJ",
      courseraNodeExpressMongoDb:
        "https://www.coursera.org/account/accomplishments/certificate/XNV5NXWPED46",
      ibmCloudMastery:
        "https://www.youracclaim.com/badges/22b60871-8d9d-421d-9aaa-4af3480ed194?source=linked_in_profile",
      ibmCloudExplorer:
        "https://www.credly.com/badges/c8cabe52-fdce-48ab-8e9d-d712b5489a79?source=linked_in_profile"
    },
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
