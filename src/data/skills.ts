import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiCheckSquare,
  FiCode,
  FiDatabase
} from "react-icons/fi";


type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
  Icon: IconType;
};

export const skillCategories = [
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
    Icon: FiCode
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
    Icon: FiDatabase
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
    Icon: FiBarChart2
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
    Icon: FiCheckSquare
  }
] satisfies SkillCategory[];
