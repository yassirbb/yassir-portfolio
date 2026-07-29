import { describe, expect, it } from "vitest";

import { certifications } from "@/data/certifications";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import {
  certificationSourceSchema,
  experienceSourceSchema,
  projectSourceSchema,
} from "@/data/validation";

const translatedResponsibilities = ["Contribution traduite"];

const validProject = {
  id: "portfolio",
  slug: "portfolio",
  title: "Portfolio",
  year: "2025",
  category: "personal",
  status: "completed",
  summary: "Project summary",
  description: "Project description",
  role: "Frontend Developer",
  responsibilities: ["Built the interface"],
  technologies: ["Next.js"],
  image: {
    src: "/images/projects/portfolio.webp",
    alt: "Portfolio interface",
  },
  repositoryUrl: "https://github.com/example/portfolio",
  liveUrl: "https://example.com",
  links: {},
  translations: {
    fr: {
      summary: "Résumé du projet",
      description: "Description du projet",
      role: "Développeur Frontend",
      responsibilities: translatedResponsibilities,
    },
  },
};

describe("portfolio data validation", () => {
  it("accepts every current dataset", () => {
    expect(projects.length).toBeGreaterThan(0);
    expect(certifications.length).toBeGreaterThan(0);
    expect(experiences.length).toBeGreaterThan(0);
  });

  it("rejects invalid project URLs, statuses and missing translations", () => {
    expect(
      projectSourceSchema.safeParse({
        ...validProject,
        status: "archived",
        repositoryUrl: "not-a-url",
        translations: {},
      }).success,
    ).toBe(false);
  });

  it("requires links according to the project category", () => {
    const withoutRepository: Record<string, unknown> = {
      ...validProject,
    };
    delete withoutRepository.repositoryUrl;

    expect(projectSourceSchema.safeParse(withoutRepository).success).toBe(false);
  });

  it("rejects incoherent certification and experience dates", () => {
    expect(
      certificationSourceSchema.safeParse({
        id: "future-certificate",
        title: "Future certificate",
        provider: "IBM",
        providerId: "ibm",
        issuedAt: "2999-13",
        formattedDate: "2999",
        description: "Description",
        skills: ["Cloud"],
        translations: {
          fr: { description: "Description traduite" },
        },
      }).success,
    ).toBe(false);

    expect(
      experienceSourceSchema.safeParse({
        id: "invalid-period",
        period: "2025 - 2020",
        title: "Frontend Engineer",
        company: "Company",
        duration: "5 years",
        location: "Remote",
        responsibilities: ["Built interfaces"],
        technologies: ["React"],
        translations: {
          fr: {
            period: "2025 - 2020",
            title: "Ingénieur Frontend",
            duration: "5 ans",
            location: "À distance",
            responsibilities: translatedResponsibilities,
          },
        },
      }).success,
    ).toBe(false);
  });
});
