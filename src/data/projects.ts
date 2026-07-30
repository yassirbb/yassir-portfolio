import type { Locale } from "@/i18n/config";
import {
  localizeItems,
  type LocalizedSource
} from "./localize";
import {
  projectSourceSchema,
  validateData
} from "./validation";
import { paths } from "@/config/paths";

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
      "Enterprise modernization project at Centreon focused on rebuilding a large-scale monitoring interface with a modern React architecture.",
    role: "Frontend Engineer",
    responsibilities: [
      "Migrated the map viewer and editor from Backbone.js to React and TypeScript across a scope of more than 700 files, while preserving existing business rules and backend integrations.",
      "Developed and integrated draw.io as Centreon MAP's graphical editor engine, enabling users to interactively create and edit their monitoring maps.",
      "Redesigned the module's main pages and created a reusable modal architecture with protection against losing unsaved changes.",
      "Developed interactive configuration, navigation and monitoring features with React Router, Visx and Leaflet.js."
    ],
    image: {
      src: paths.images.projects.centreonMap,
      alt: "Centreon Map monitoring interface"
    },
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "TanStack Query",
      "Jotai",
      "Rspack",
      "Cypress",
      "draw.io",
      "React Router",
      "Visx",
      "Leaflet.js"
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
        description: "Projet d'entreprise chez Centreon consacré à la modernisation d'une interface de supervision à grande échelle avec une architecture React moderne.",
        role: "Ingénieur Frontend",
        responsibilities: [
          "Migré le visualiseur et l'éditeur de cartes de Backbone.js vers React et TypeScript, sur un périmètre de plus de 700 fichiers, tout en préservant les règles métier et les intégrations backend existantes.",
          "Développé et intégré draw.io comme moteur de l'éditeur graphique de Centreon MAP, permettant aux utilisateurs de créer et de modifier interactivement leurs cartes de supervision.",
          "Refondu les principales pages du module et conçu une architecture de modales réutilisables avec protection contre la perte de modifications non enregistrées.",
          "Développé des fonctionnalités interactives de configuration, de navigation et de supervision avec React Router, Visx et Leaflet.js."
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
      "Enterprise project at Centreon focused on simulating and configuring business activities, indicators and their hierarchical relationships.",
    role: "Frontend Engineer",
    responsibilities: [
      "Developed a simulation panel for previewing configuration changes before applying them.",
      "Designed an interactive tree representation of business activities with Visx, making hierarchical relationships and associated indicators easier to explore.",
      "Developed the indicator list, a quick-creation workflow and configurable icon display.",
      "Created a reusable field-reset component integrated with Formik.",
      "Restructured state management with Jotai to separate temporary simulation changes from persistent data."
    ],
    image: {
      src: paths.images.projects.bamSimulation,
      alt: "BAM simulation and monitoring dashboard"
    },
    technologies: [
      "React",
      "TypeScript",
      "Visx",
      "Jotai",
      "Formik",
      "Yup",
      "REST APIs"
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
        description: "Projet d'entreprise chez Centreon consacré à la simulation et à la configuration des activités métier, des indicateurs et de leurs relations hiérarchiques.",
        role: "Ingénieur Frontend",
        responsibilities: [
          "Développé un panneau de simulation permettant de prévisualiser les changements de configuration avant leur application.",
          "Conçu une représentation graphique et interactive des activités métier sous forme d'arbre avec Visx, facilitant l'exploration des relations hiérarchiques et la visualisation des indicateurs associés.",
          "Développé la liste des indicateurs, un workflow de création rapide et l'affichage d'icônes configurables.",
          "Créé un composant réutilisable de réinitialisation des champs, intégré à Formik.",
          "Restructuré la gestion d'état avec Jotai afin de séparer les modifications temporaires de simulation des données persistantes."
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
      "Designed and developed a bilingual, responsive portfolio featuring projects, a secure contact form and transactional email delivery.",
    role: "Designer and Frontend Developer",
    responsibilities: [
      "Designed and developed a bilingual, responsive interface for presenting projects, experience and technical skills.",
      "Built a secure contact form with server-side Zod validation, anti-spam protection and email delivery through Resend.",
      "Implemented reusable components, accessible navigation, responsive layouts and SEO metadata."
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Zod",
      "Resend",
      "REST API",
      "Accessibility",
      "SEO"
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
        description: "Conception et développement d'un portfolio bilingue et responsive avec présentation des projets, formulaire de contact sécurisé et envoi d'e-mails.",
        role: "Designer et développeur Frontend",
        responsibilities: [
          "Conçu et développé une interface bilingue et responsive pour présenter les projets, l'expérience et les compétences techniques.",
          "Créé un formulaire de contact sécurisé avec validation Zod côté serveur, protection anti-spam et envoi d'e-mails avec Resend.",
          "Mis en place des composants réutilisables, une navigation accessible, des mises en page responsives et les métadonnées SEO."
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

validateData(projectSourceSchema, projectSources, "projects");

export const projects = localizeItems(projectSources, "en");

export function getProjects(locale: Locale) {
  return localizeItems(projectSources, locale);
}
