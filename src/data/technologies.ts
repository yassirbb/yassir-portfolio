export type TechnologyId =
  | "react"
  | "typescript"
  | "javascript"
  | "mui"
  | "cypress"
  | "jotai"
  | "react-query"
  | "visx"
  | "leaflet";

export type Technology = {
  id: TechnologyId;
  name: string;
  className: string;
};

export const technologies: Technology[] = [
  {
    id: "react",
    name: "React",
    className: "tech-react"
  },
  {
    id: "typescript",
    name: "TypeScript",
    className: "tech-typescript"
  },
  {
    id: "javascript",
    name: "JavaScript",
    className: "tech-javascript"
  },
  {
    id: "mui",
    name: "MUI",
    className: "tech-mui"
  },
  {
    id: "cypress",
    name: "Cypress",
    className: "tech-cypress"
  },
  {
    id: "jotai",
    name: "Jotai",
    className: "tech-jotai"
  },
  {
    id: "react-query",
    name: "React Query",
    className: "tech-query"
  },
  {
    id: "visx",
    name: "Visx",
    className: "tech-visx"
  },
  {
    id: "leaflet",
    name: "Leaflet",
    className: "tech-leaflet"
  }
];