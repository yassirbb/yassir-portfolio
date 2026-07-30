import { z } from "zod";

import { contactFieldLimits } from "./contact-constraints";
import { locales } from "@/i18n/config";

export const contactFormSchema = z
  .object({
    locale: z.enum(locales),
    name: z
      .string()
      .trim()
      .min(contactFieldLimits.name.min)
      .max(contactFieldLimits.name.max),
    email: z
      .email()
      .trim()
      .max(contactFieldLimits.email.max),
    subject: z
      .string()
      .trim()
      .min(contactFieldLimits.subject.min)
      .max(contactFieldLimits.subject.max),
    message: z
      .string()
      .trim()
      .min(contactFieldLimits.message.min)
      .max(contactFieldLimits.message.max),
    website: z.literal("")
  })
  .strict();

export type ContactFormPayload = z.infer<
  typeof contactFormSchema
>;
