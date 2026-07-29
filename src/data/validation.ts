import { z } from "zod";

const currentYear = new Date().getUTCFullYear();
const requiredText = z.string().trim().min(1);
const requiredTextList = z.array(requiredText).min(1);
const httpUrl = z
  .string()
  .url()
  .refine(
    (value) => value.startsWith("https://") || value.startsWith("http://"),
    "URL must use HTTP or HTTPS",
  );

const yearSchema = z
  .string()
  .regex(/^\d{4}$/, "Expected a four-digit year")
  .refine(
    (value) => Number(value) >= 1900 && Number(value) <= currentYear + 1,
    `Year must be between 1900 and ${currentYear + 1}`,
  );

const issuedAtSchema = z
  .string()
  .regex(/^\d{4}(?:-(?:0[1-9]|1[0-2]))?$/, "Expected YYYY or YYYY-MM")
  .refine(
    (value) => Number(value.slice(0, 4)) <= currentYear,
    "Issue date cannot be in the future",
  );

const imageSchema = z.object({
  src: z.string().startsWith("/"),
  alt: requiredText,
});

const projectTranslationSchema = z.object({
  title: requiredText.optional(),
  summary: requiredText,
  description: requiredText,
  role: requiredText,
  responsibilities: requiredTextList,
});

export const projectSourceSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: requiredText,
    year: yearSchema.optional(),
    category: z.enum(["enterprise", "personal", "pet"]),
    status: z.enum(["production", "in-progress", "completed"]),
    summary: requiredText,
    description: requiredText,
    role: requiredText,
    responsibilities: requiredTextList,
    technologies: requiredTextList,
    image: imageSchema,
    repositoryUrl: httpUrl.optional(),
    liveUrl: httpUrl.optional(),
    blogUrl: httpUrl.optional(),
    links: z.object({
      doc: z
        .object({
          host: httpUrl,
          path: z.string().startsWith("/"),
        })
        .optional(),
      github: httpUrl.optional(),
      demo: httpUrl.optional(),
      blog: httpUrl.optional(),
    }),
    translations: z.object({
      fr: projectTranslationSchema,
    }),
  })
  .superRefine((project, context) => {
    if (project.category === "personal") {
      if (!project.repositoryUrl && !project.links.github) {
        context.addIssue({
          code: "custom",
          path: ["repositoryUrl"],
          message: "A personal project requires a repository link",
        });
      }

      if (!project.liveUrl && !project.links.demo) {
        context.addIssue({
          code: "custom",
          path: ["liveUrl"],
          message: "A personal project requires a live link",
        });
      }
    }

    if (
      project.category === "enterprise" &&
      project.status === "production" &&
      !project.links.doc
    ) {
      context.addIssue({
        code: "custom",
        path: ["links", "doc"],
        message: "A production enterprise project requires documentation",
      });
    }
  });

const certificationTranslationSchema = z.object({
  title: requiredText.optional(),
  formattedDate: requiredText.optional(),
  description: requiredText,
});

export const certificationSourceSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: requiredText,
    provider: requiredText,
    providerId: z.enum(["epic-react", "coursera", "ibm"]),
    issuedAt: issuedAtSchema.optional(),
    formattedDate: requiredText.optional(),
    description: requiredText,
    skills: requiredTextList,
    credentialId: requiredText.optional(),
    credentialUrl: httpUrl.optional(),
    translations: z.object({
      fr: certificationTranslationSchema,
    }),
  })
  .superRefine((certification, context) => {
    if (Boolean(certification.credentialId) !== Boolean(certification.credentialUrl)) {
      context.addIssue({
        code: "custom",
        path: ["credentialUrl"],
        message: "Credential ID and URL must be provided together",
      });
    }

    if (
      certification.issuedAt &&
      !certification.formattedDate
    ) {
      context.addIssue({
        code: "custom",
        path: ["formattedDate"],
        message: "A formatted date is required when an issue date is provided",
      });
    }
  });

const experienceTranslationSchema = z.object({
  period: requiredText,
  title: requiredText,
  engagement: requiredText.optional(),
  duration: requiredText,
  location: requiredText,
  responsibilities: requiredTextList,
});

export const experienceSourceSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    period: requiredText,
    title: requiredText,
    company: requiredText,
    engagement: requiredText.optional(),
    duration: requiredText,
    location: requiredText,
    responsibilities: requiredTextList,
    technologies: requiredTextList,
    translations: z.object({
      fr: experienceTranslationSchema,
    }),
  })
  .superRefine((experience, context) => {
    const years = experience.period
      .match(/\b(?:19|20)\d{2}\b/g)
      ?.map(Number) ?? [];

    if (
      years.length === 0 ||
      years.length > 2 ||
      years.some((year) => year > currentYear) ||
      (years.length === 2 && years[0] > years[1])
    ) {
      context.addIssue({
        code: "custom",
        path: ["period"],
        message: "Experience period must contain coherent chronological years",
      });
    }
  });

export function validateData(
  schema: z.ZodType,
  data: unknown,
  datasetName: string,
): void {
  const result = z.array(schema).safeParse(data);

  if (!result.success) {
    throw new Error(
      `Invalid ${datasetName} data:\n${z.prettifyError(result.error)}`,
    );
  }
}
