import { z } from "zod";

export const contactFormSchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    email: z.email().trim().max(254),
    subject: z.string().trim().min(2).max(150),
    message: z.string().trim().min(10).max(1500),
    website: z.string().trim().max(0).optional()
  })
  .strict();

export type ContactFormPayload = z.infer<
  typeof contactFormSchema
>;
