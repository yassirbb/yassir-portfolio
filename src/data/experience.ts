import type { Locale } from "@/i18n/config";
import { localizeItems, type LocalizedSource } from "./localize";
import {
  experienceSourceSchema,
  validateData
} from "./validation";

export type Experience = {
  id: string;
  period: string;
  title: string;
  company: string;
  engagement?: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
};

const experienceSources = [
  {
    id: "centreon",
    period: "January 2022 – Present",
    title: "Frontend Engineer",
    company: "Centreon Products",
    engagement: "Client engagement",
    duration: "4+ years",
    location:
      "Marrakech, Morocco — remote collaboration with a France-based client and team",
    responsibilities: [
      "Developed and maintained monitoring and configuration interfaces with React and TypeScript for Centreon MAP and Centreon BAM.",
      "Migrated legacy Backbone.js interfaces to React and TypeScript while preserving business rules and backend integrations.",
      "Designed reusable UI components and complex forms with Material UI, Formik, Yup and an internal design system.",
      "Integrated REST APIs and managed complex application state with React Query and Jotai.",
      "Developed and maintained close to 500 Cypress component tests, securing critical Centreon MAP and Centreon BAM user journeys.",
      "Collaborated remotely with international product, backend, frontend and QA teams based in France in an Agile environment."
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "React Router",
      "Backbone.js",
      "React Query",
      "Jotai",
      "REST APIs",
      "Formik",
      "Yup",
      "Material UI",
      "i18n",
      "Visx",
      "D3.js",
      "Leaflet.js",
      "SVG",
      "Cypress Component Testing",
      "Git",
      "GitHub",
      "Webpack",
      "Vite",
      "Docker",
      "CI/CD",
      "Agile (Scrum)"
    ],
    translations: { fr: {
      period: "Janvier 2022 – Aujourd'hui",
      title: "Ingénieur Frontend",
      engagement: "Mission client",
      duration: "4+ ans",
      location: "Marrakech, Maroc — collaboration à distance avec un client et une équipe basés en France",
      responsibilities: [
        "Développé et maintenu des interfaces de supervision et de configuration avec React et TypeScript sur Centreon MAP et Centreon BAM.",
        "Migré des interfaces legacy en Backbone.js vers React et TypeScript, en préservant les règles métier et les intégrations backend.",
        "Conçu des composants UI réutilisables et des formulaires complexes avec Material UI, Formik, Yup et un design system interne.",
        "Intégré des API REST et géré des états applicatifs complexes avec React Query et Jotai.",
        "Développé et maintenu près de 500 tests de composants avec Cypress, sécurisant les parcours critiques de Centreon MAP et Centreon BAM.",
        "Collaboré à distance avec les équipes internationales produit, backend, frontend et QA basées en France, dans un environnement Agile."
      ]
    } }
  },
  {
    id: "apm-terminals",
    period: "March 2021 – September 2021",
    title: "Full Stack Developer Intern",
    company: "APM Terminals",
    duration: "7 months",
    location: "Tangier, Morocco",
    responsibilities: [
      "Developed an equipment-monitoring application for port operations with HTML, CSS, JavaScript and ASP.NET MVC.",
      "Designed the application architecture and SQL Server database, then added checklist, inspection and maintenance modules."
    ],
    technologies: [
      "ASP.NET MVC",
      "C#",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SQL Server",
      "Git"
    ],
    translations: { fr: {
      period: "Mars 2021 – Septembre 2021",
      title: "Stagiaire développeur Full Stack",
      duration: "7 mois",
      location: "Tanger, Maroc",
      responsibilities: [
        "Développé une application de supervision d'équipements portuaires avec HTML, CSS, JavaScript et ASP.NET MVC.",
        "Conçu l'architecture applicative et la base de données SQL Server, puis ajouté des modules de checklists, d'inspection et de maintenance."
      ]
    } }
  }
] satisfies LocalizedSource<Experience>[];

validateData(
  experienceSourceSchema,
  experienceSources,
  "experiences"
);

export const experiences = localizeItems(experienceSources, "en");
export const getExperiences = (locale: Locale) =>
  localizeItems(experienceSources, locale);
