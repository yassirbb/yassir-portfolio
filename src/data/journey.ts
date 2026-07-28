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

const journeySources = [
  {
    id: "ensa-tanger",
    period: "2016 – 2021",
    title: "ENSA Tanger",
    description:
      "Computer Science Engineering degree with a strong foundation in software development, algorithms and system design.",
    iconId: "education",
    translations: { fr: {
      title: "ENSA Tanger",
      description: "Diplôme d'ingénieur en informatique avec de solides bases en développement logiciel, algorithmique et conception de systèmes."
    } }
  },
  {
    id: "apm-terminals",
    period: "2021",
    title: "APM Terminals — Internship",
    description:
      "Full-stack development internship working on real-world business applications and gaining professional delivery experience.",
    iconId: "internship",
    translations: { fr: {
      title: "APM Terminals — Stage",
      description: "Stage en développement full stack sur des applications métier réelles et découverte de la livraison en environnement professionnel."
    } }
  },
  {
    id: "frontend-engineer",
    period: "2022 – Present",
    title: "Frontend Engineer",
    description:
      "Building scalable React applications, modernizing legacy products and collaborating with international product teams.",
    iconId: "career",
    translations: { fr: {
      period: "2022 – Aujourd'hui",
      title: "Ingénieur Frontend",
      description: "Développement d'applications React évolutives, modernisation de produits historiques et collaboration avec des équipes produit internationales."
    } }
  }
] satisfies LocalizedSource<JourneyEntry>[];

export const journeyEntries = localizeItems(journeySources, "en");
export const getJourneyEntries = (locale: Locale) =>
  localizeItems(journeySources, locale);
import type { Locale } from "@/i18n/config";
import { localizeItems, type LocalizedSource } from "./localize";
