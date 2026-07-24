export type JourneyIconId =
  | "education"
  | "internship"
  | "career";

export type JourneyEntry = {
  id: string;
  period: string;
  title: string;
  description: string;
  iconId: JourneyIconId;
};

export const journeyEntries = [
  {
    id: "ensa-tanger",
    period: "2016 – 2021",
    title: "ENSA Tanger",
    description:
      "Computer Science Engineering degree with a strong foundation in software development, algorithms and system design.",
    iconId: "education"
  },
  {
    id: "apm-terminals",
    period: "2021",
    title: "APM Terminals — Internship",
    description:
      "Full-stack development internship working on real-world business applications and gaining professional delivery experience.",
    iconId: "internship"
  },
  {
    id: "frontend-engineer",
    period: "2022 – Present",
    title: "Frontend Engineer",
    description:
      "Building scalable React applications, modernizing legacy products and collaborating with international product teams.",
    iconId: "career"
  }
] satisfies JourneyEntry[];