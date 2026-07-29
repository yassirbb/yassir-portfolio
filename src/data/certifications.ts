export type CertificationProviderId =
  | "epic-react"
  | "coursera"
  | "ibm";

export type Certification = {
  id: string;
  title: string;
  provider: string;
  providerId: CertificationProviderId;
  issuedAt?: string;
  formattedDate?: string;
  description: string;
  skills: string[];
  credentialId?: string;
  credentialUrl?: string;
};

const certificationSources = [
  {
    id: "epic-react",
    title: "Epic React",
    provider: "Epic Web Dev",
    providerId: "epic-react",
    description:
        "Advanced React training focused on component patterns, application architecture, performance, testing and maintainable frontend development.",
    skills: [
        "React",
        "Testing",
        "Performance",
        "Architecture"
    ],
    translations: { fr: {
      description: "Formation React avancée axée sur les modèles de composants, l'architecture applicative, les performances, les tests et la maintenabilité."
    } }
  },
  {
    id: "html-css-javascript",
    title:
      "HTML, CSS, and JavaScript for Web Developers",
    provider: "Coursera",
    providerId: "coursera",
    issuedAt: "2021-01",
    formattedDate: "January 2021",
    description:
      "Frontend development fundamentals covering semantic HTML, responsive CSS and interactive web applications with JavaScript.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design"
    ],
    credentialId: "JSFBNUZ3H7HJ",
    credentialUrl:
      paths.external.credentials.courseraHtmlCssJavaScript,
    translations: { fr: {
      formattedDate: "Janvier 2021",
      title: "HTML, CSS et JavaScript pour les développeurs web",
      description: "Fondamentaux du développement frontend : HTML sémantique, CSS responsive et applications web interactives avec JavaScript."
    } }
  },
  {
    id: "node-express-mongodb",
    title:
      "Server-side Development with NodeJS, Express and MongoDB",
    provider: "Coursera",
    providerId: "coursera",
    issuedAt: "2021-11",
    formattedDate: "November 2021",
    description:
      "Server-side application development using Node.js, Express and MongoDB, including REST APIs and database integration.",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs"
    ],
    credentialId: "XNV5NXWPED46",
    credentialUrl:
      paths.external.credentials.courseraNodeExpressMongoDb,
    translations: { fr: {
      formattedDate: "Novembre 2021",
      title: "Développement serveur avec NodeJS, Express et MongoDB",
      description: "Développement d'applications serveur avec Node.js, Express et MongoDB, incluant les API REST et l'intégration de bases de données."
    } }
  },
  {
    id: "ibm-cloud-application-developer-mastery",
    title:
      "Cloud Application Developer 2019 - Mastery Award",
    provider: "IBM",
    providerId: "ibm",
    issuedAt: "2020",
    formattedDate: "2020",
    description:
      "IBM digital credential recognizing mastery of cloud application development.",
    skills: [
      "Cloud Application Development",
      "IBM Cloud"
    ],
    credentialId:
      "22b60871-8d9d-421d-9aaa-4af3480ed194",
    credentialUrl:
      paths.external.credentials.ibmCloudMastery,
    translations: {
      fr: {
        title:
          "Cloud Application Developer 2019 - Prix Mastery",
        description:
          "Badge numérique IBM attestant la maîtrise du développement d'applications cloud."
      }
    }
  },
  {
    id: "ibm-cloud-application-developer-explorer",
    title:
      "Cloud Application Developer 2019 - Explorer Award",
    provider: "IBM",
    providerId: "ibm",
    issuedAt: "2020",
    formattedDate: "2020",
    description:
      "IBM digital credential recognizing exploration of cloud application development.",
    skills: [
      "Cloud Application Development",
      "IBM Cloud"
    ],
    credentialId:
      "c8cabe52-fdce-48ab-8e9d-d712b5489a79",
    credentialUrl:
      paths.external.credentials.ibmCloudExplorer,
    translations: {
      fr: {
        title:
          "Cloud Application Developer 2019 - Prix Explorer",
        description:
          "Badge numérique IBM attestant l'exploration du développement d'applications cloud."
      }
    }
  }
] satisfies LocalizedSource<Certification>[];

export const certifications = localizeItems(certificationSources, "en");
export const getCertifications = (locale: Locale) =>
  localizeItems(certificationSources, locale);
import type { Locale } from "@/i18n/config";
import { localizeItems, type LocalizedSource } from "./localize";
import { paths } from "@/config/paths";
