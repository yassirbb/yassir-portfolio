import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiCheckSquare,
  FiCode,
  FiDatabase
} from "react-icons/fi";
import type { Locale } from "@/i18n/config";
import {
  localizeItems,
  type LocalizedSource
} from "./localize";

type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
  Icon: IconType;
};

const skillSources = [
  {
    id: "core-frontend",
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "React Router",
      "Backbone.js",
      "Next.js",
      "Tailwind CSS"
    ],
    Icon: FiCode,
    translations: {
      fr: { title: "Frontend" }
    }
  },
  {
    id: "state-and-data",
    title: "State and data",
    skills: [
      "React Query",
      "Jotai",
      "REST APIs"
    ],
    Icon: FiDatabase,
    translations: {
      fr: { title: "État et données" }
    }
  },
  {
    id: "forms-and-validation",
    title: "Forms and validation",
    skills: [
      "Formik",
      "Yup"
    ],
    Icon: FiCheckSquare,
    translations: {
      fr: { title: "Formulaires et validation" }
    }
  },
  {
    id: "ui-and-visualization",
    title: "UI and visualization",
    skills: [
      "Material UI",
      "i18n",
      "Visx",
      "D3.js",
      "Leaflet.js",
      "SVG",
      "draw.io"
    ],
    Icon: FiBarChart2,
    translations: {
      fr: { title: "UI et visualisation" }
    }
  },
  {
    id: "testing-and-tooling",
    title: "Testing and tooling",
    skills: [
      "Cypress Component Testing",
      "Git",
      "GitHub",
      "Webpack",
      "Agile (Scrum)",
      "CI/CD",
      "Vite",
      "Docker"
    ],
    Icon: FiCheckSquare,
    translations: {
      fr: { title: "Tests et outillage" }
    }
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      "ASP.NET MVC",
      "Node.js",
      "Express"
    ],
    Icon: FiCode,
    translations: {
      fr: { title: "Backend" }
    }
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Oracle 11g"
    ],
    Icon: FiDatabase,
    translations: {
      fr: { title: "Bases de données" }
    }
  }
] satisfies LocalizedSource<SkillCategory>[];

export const skillCategories = localizeItems(
  skillSources,
  "en"
);

export const getSkillCategories = (locale: Locale) =>
  localizeItems(skillSources, locale);
