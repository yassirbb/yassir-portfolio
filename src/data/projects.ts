export type ProjectCategory =
  | "enterprise"
  | "personal"
  | "pet";

export type ProjectStatus =
  | "production"
  | "in-progress"
  | "completed";

interface Doc {
  host: string;
  path: string;
}

export interface Links {
  doc?: Doc;
  github?: string;
  demo?: string;
  blog?: string;
}
export type Project = {
  id: string;
  slug: string;
  title: string;
  year?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  description: string;
  role: string;
  responsibilities: string[];
  technologies: string[];
  image: {
    src: string;
    alt: string;
  };
  repositoryUrl?: string;
  liveUrl?: string;
  blogUrl?: string;
  links: Links;
};

const projectSources = [
  {
    id: "centreon-map",
    slug: "centreon-map",
    title: "Centreon Map",
    category: "enterprise",
    status: "production",
    summary:
      "Interactive monitoring maps for visualizing infrastructure and service health.",
    description:
      "Contributed to the modernization and development of Centreon Map, including React migrations, routing improvements, visualization workflows and reusable monitoring interfaces.",
    role: "Frontend Engineer",
    responsibilities: [
      "Migrated legacy Backbone.js interfaces to React and TypeScript",
      "Built interactive monitoring and configuration features",
      "Integrated map and visualization workflows",
      "Maintained component and end-to-end Cypress tests"
    ],
    image: {
      src: paths.images.projects.centreonMap,
      alt: "Centreon Map monitoring interface"
    },
    technologies: [
      "React",
      "TypeScript",
      "Visx",
      "Leaflet.js",
      "React Query",
      "Cypress"
    ],
    links: {
      doc: {
        host: paths.documentation.centreon.host,
        path: paths.documentation.centreon.map
      }
    },
    translations: {
      fr: {
        summary: "Cartes de supervision interactives pour visualiser l'état des infrastructures et des services.",
        description: "Contribution à la modernisation et au développement de Centreon Map : migrations React, routage, visualisation et interfaces de supervision réutilisables.",
        role: "Ingénieur Frontend",
        responsibilities: [
          "Migration d'interfaces Backbone.js vers React et TypeScript",
          "Développement de fonctionnalités interactives de supervision et de configuration",
          "Intégration de cartes et de parcours de visualisation",
          "Maintenance des tests de composants et end-to-end avec Cypress"
        ]
      }
    }
  },
  {
    id: "centreon-bam",
    slug: "centreon-bam",
    title: "Centreon BAM",
    category: "enterprise",
    status: "production",
    summary:
      "Business activity monitoring and simulation interfaces for enterprise users.",
    description:
      "Developed configuration and simulation experiences for business activities, indicators and impact calculations.",
    role: "Frontend Engineer",
    responsibilities: [
      "Built Business Activity configuration interfaces",
      "Developed simulation workflows and state management",
      "Created reusable form and reset patterns",
      "Integrated API Platform and Hydra responses"
    ],
    image: {
      src: paths.images.projects.bamSimulation,
      alt: "BAM simulation and monitoring dashboard"
    },
    technologies: [
      "React",
      "TypeScript",
      "Jotai",
      "Formik",
      "Yup",
      "Material UI",
      "Cypress"
    ],
    links: {
      doc: {
        host: paths.documentation.centreon.host,
        path: paths.documentation.centreon.bam
      }
    },
    translations: {
      fr: {
        summary: "Interfaces de supervision et de simulation des activités métier pour les utilisateurs d'entreprise.",
        description: "Développement d'expériences de configuration et de simulation pour les activités métier, les indicateurs et les calculs d'impact.",
        role: "Ingénieur Frontend",
        responsibilities: [
          "Création d'interfaces de configuration des activités métier",
          "Développement des parcours de simulation et de la gestion d'état",
          "Création de modèles réutilisables pour les formulaires et leur réinitialisation",
          "Intégration des réponses API Platform et Hydra"
        ]
      }
    }
  },
  {
    id: "equipment-transport-management",
    slug: "equipment-transport-management",
    title: "Equipment Transport Management",
    category: "enterprise",
    status: "completed",
    summary:
      "An internal web application for managing transport equipment, inspections and operational tracking.",
    description:
      "Developed during my end-of-study internship at APM Terminals Tangier. The application supported the management and monitoring of transport equipment, inspection workflows and operational information through a centralized interface.",
    role: "Full Stack Developer Intern",
    responsibilities: [
      "Developed interfaces for managing and tracking transport equipment",
      "Implemented equipment inspection and operational workflows",
      "Built backend features using ASP.NET MVC and C#",
      "Worked with JavaScript and SQL for frontend behavior and data management",
      "Integrated REST APIs between application services",
      "Contributed to the full development lifecycle as an end-of-study project"
    ],
    technologies: [
      "ASP.NET MVC",
      "C#",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "REST APIs"
    ],
    image: {
      src: paths.images.projects.equipmentTransport,
      alt:
        "Equipment transport management and inspection application interface"
    },
    links: {},
    translations: {
      fr: {
        title: "Gestion des équipements de transport",
        summary: "Application interne de gestion des équipements de transport, des inspections et du suivi opérationnel.",
        description: "Application développée lors de mon stage de fin d'études chez APM Terminals Tanger pour centraliser la gestion, les inspections et le suivi des équipements de transport.",
        role: "Stagiaire développeur Full Stack",
        responsibilities: [
          "Développement des interfaces de gestion et de suivi des équipements",
          "Mise en place des parcours d'inspection et des opérations",
          "Développement backend avec ASP.NET MVC et C#",
          "Utilisation de JavaScript et SQL pour le comportement et les données",
          "Intégration d'API REST entre les services",
          "Contribution à l'ensemble du cycle de développement"
        ]
      }
    }
  },
  {
    id: "developer-portfolio",
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    category: "personal",
    status: "in-progress",
    summary:
      "A responsive portfolio presenting my experience, projects and technical journey.",
    description:
      "Designed and developed with Next.js, TypeScript and custom CSS.",
    role: "Designer and Frontend Developer",
    responsibilities: [
      "Designed the visual system",
      "Built reusable page components",
      "Implemented responsive layouts",
      "Added accessible navigation and interactions"
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS"
    ],
    repositoryUrl:
      paths.external.projects.portfolioRepository,
    liveUrl: paths.external.projects.portfolioLive,
    image: {
      src: paths.images.projects.portfolio,
      alt: "Developer portfolio homepage interface"
    },
    links: {},
    translations: {
      fr: {
        title: "Portfolio développeur",
        summary: "Portfolio responsive présentant mon expérience, mes projets et mon parcours technique.",
        description: "Conçu et développé avec Next.js, TypeScript et du CSS personnalisé.",
        role: "Designer et développeur Frontend",
        responsibilities: [
          "Conception du système visuel",
          "Création de composants de page réutilisables",
          "Mise en place de mises en page responsives",
          "Ajout d'une navigation et d'interactions accessibles"
        ]
      }
    }
  },
  {
    id: "social-media-app-clone",
    slug: "social-media-app-clone",
    title: "Social Media App Clone",
    year: "2025",
    category: "pet",
    status: "completed",
    summary:
      "A tutorial-based mobile social application built to explore the React Native ecosystem.",
    description:
      "Built following a YouTube tutorial to explore mobile authentication flows, backend-as-a-service logic and reusable interfaces with Expo and React Native.",
    role: "React Native Developer",
    responsibilities: [
      "Implemented authentication flows with Clerk",
      "Used Convex for backend logic and persistent application data",
      "Built reusable interfaces with Expo and React Native components",
      "Explored mobile application architecture and navigation patterns"
    ],
    technologies: [
      "React Native",
      "Expo",
      "Clerk",
      "Convex"
    ],
    image: {
      src: paths.images.projects.socialMediaClone,
      alt: "Social media mobile application illustration"
    },
    links: {},
    translations: {
      fr: {
        title: "Clone d'application de réseau social",
        summary: "Application sociale mobile réalisée à partir d'un tutoriel pour explorer l'écosystème React Native.",
        description: "Application développée en suivant un tutoriel YouTube pour explorer l'authentification mobile, la logique backend-as-a-service et les interfaces réutilisables avec Expo et React Native.",
        role: "Développeur React Native",
        responsibilities: [
          "Mise en place des parcours d'authentification avec Clerk",
          "Utilisation de Convex pour la logique backend et la persistance des données",
          "Création d'interfaces réutilisables avec Expo et les composants React Native",
          "Exploration de l'architecture et de la navigation d'une application mobile"
        ]
      }
    }
  },
  {
    id: "flappy-bird-clone",
    slug: "flappy-bird-clone",
    title: "Flappy Bird Clone",
    year: "2025",
    category: "pet",
    status: "completed",
    summary:
      "A lightweight browser game recreating the classic Flappy Bird mechanics.",
    description:
      "Built to revisit core web fundamentals and browser game loops using modular HTML, CSS and JavaScript.",
    role: "Frontend Developer",
    responsibilities: [
      "Implemented collision detection and score tracking",
      "Created parallax scrolling and animated sprite behavior",
      "Built the game loop with modular JavaScript",
      "Revisited browser rendering and core web fundamentals"
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    repositoryUrl:
      paths.external.projects.flappyBirdRepository,
    blogUrl:
      paths.external.projects.flappyBirdArticle,
    image: {
      src: paths.images.projects.flappyBirdClone,
      alt: "Flappy Bird browser game illustration"
    },
    links: {},
    translations: {
      fr: {
        title: "Clone de Flappy Bird",
        summary: "Jeu léger pour navigateur reproduisant les mécaniques classiques de Flappy Bird.",
        description: "Projet réalisé pour revisiter les fondamentaux du web et les boucles de jeu dans le navigateur avec une architecture modulaire en HTML, CSS et JavaScript.",
        role: "Développeur Frontend",
        responsibilities: [
          "Mise en place de la détection des collisions et du suivi du score",
          "Création du défilement parallaxe et des animations de sprites",
          "Développement de la boucle de jeu avec du JavaScript modulaire",
          "Révision du rendu navigateur et des fondamentaux du web"
        ]
      }
    }
  }
] satisfies LocalizedSource<Project>[];

export const projects = localizeItems(projectSources, "en");

export function getProjects(locale: Locale) {
  return localizeItems(projectSources, locale);
}
import type { Locale } from "@/i18n/config";
import {
  localizeItems,
  type LocalizedSource
} from "./localize";
import { paths } from "@/config/paths";
