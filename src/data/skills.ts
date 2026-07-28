import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiCheckSquare,
  FiCode,
  FiDatabase
} from "react-icons/fi";
import type { Locale } from "@/i18n/config";
import { localizeItems, type LocalizedSource } from "./localize";


type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
  Icon: IconType;
};

const skillSources = [
  {
    id: "core-frontend",
    title: "Core frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "React Router",
      "Git"
    ],
    Icon: FiCode,
    translations: { fr: { title: "Fondamentaux frontend" } }
  },
  {
    id: "state-and-forms",
    title: "State and forms",
    skills: [
      "React Query",
      "Jotai",
      "Formik",
      "Yup"
    ],
    Icon: FiDatabase,
    translations: { fr: { title: "État et formulaires" } }
  },
  {
    id: "ui-and-visualization",
    title: "UI and visualization",
    skills: [
      "Material UI",
      "Centreon UI",
      "Visx",
      "D3.js",
      "Leaflet.js"
    ],
    Icon: FiBarChart2,
    translations: { fr: { title: "UI et visualisation" } }
  },
  {
    id: "testing-and-tooling",
    title: "Testing and tooling",
    skills: [
      "Cypress",
      "REST APIs",
      "Vite",
      "Docker"
    ],
    Icon: FiCheckSquare,
    translations: { fr: { title: "Tests et outils" } }
  }
] satisfies LocalizedSource<SkillCategory>[];

export const skillCategories = localizeItems(skillSources, "en");
export const getSkillCategories = (locale: Locale) =>
  localizeItems(skillSources, locale);
