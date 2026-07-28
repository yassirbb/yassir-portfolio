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
      "Developed and maintained enterprise monitoring and configuration interfaces using React and TypeScript across two production modules.",
      "Migrated legacy Backbone.js interfaces to React and TypeScript while preserving business behavior and backend integrations.",
      "Built reusable components and complex forms with Material UI, Formik, Yup and an internal design system.",
      "Authored and maintained close to 500 Cypress component and end-to-end tests.",
      "Collaborated with backend, product, QA and frontend teams through tickets, pull requests and code reviews."
    ],
    technologies: [
      "React",
      "TypeScript",
      "React Query",
      "Jotai",
      "Material UI",
      "Cypress"
    ],
    translations: { fr: {
      period: "Janvier 2022 – Aujourd'hui",
      title: "Ingénieur Frontend",
      engagement: "Mission client",
      duration: "4+ ans",
      location: "Marrakech, Maroc — collaboration à distance avec un client et une équipe basés en France",
      responsibilities: [
        "Développement et maintenance d'interfaces de supervision et de configuration avec React et TypeScript sur deux modules en production.",
        "Migration d'interfaces Backbone.js vers React et TypeScript en préservant le comportement métier et les intégrations backend.",
        "Création de composants réutilisables et de formulaires complexes avec Material UI, Formik, Yup et un design system interne.",
        "Création et maintenance de près de 500 tests Cypress de composants et end-to-end.",
        "Collaboration avec les équipes backend, produit, QA et frontend via tickets, pull requests et revues de code."
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
      "Contributed to an internal web application using ASP.NET MVC, C#, JavaScript and SQL.",
      "Participated in REST API integration as part of an end-of-study engineering internship."
    ],
    technologies: [
      "ASP.NET MVC",
      "C#",
      "JavaScript",
      "SQL",
      "REST APIs"
    ],
    translations: { fr: {
      period: "Mars 2021 – Septembre 2021",
      title: "Stagiaire développeur Full Stack",
      duration: "7 mois",
      location: "Tanger, Maroc",
      responsibilities: [
        "Contribution à une application web interne avec ASP.NET MVC, C#, JavaScript et SQL.",
        "Participation à l'intégration d'API REST dans le cadre d'un stage de fin d'études."
      ]
    } }
  }
] satisfies LocalizedSource<Experience>[];

export const experiences = localizeItems(experienceSources, "en");
export const getExperiences = (locale: Locale) =>
  localizeItems(experienceSources, locale);
import type { Locale } from "@/i18n/config";
import { localizeItems, type LocalizedSource } from "./localize";
