import { Resend } from "resend";
import { z } from "zod";

import { contactFormSchema } from "@/features/contact/contact-schema";

const MAX_REQUEST_SIZE = 10_000;

const contactEnvironmentSchema = z.object({
  RESEND_API_KEY: z.string().trim().min(1),
  CONTACT_FROM_EMAIL: z.string().trim().min(1),
  CONTACT_TO_EMAIL: z.email().trim()
});

export type ContactResponseCode =
  | "MESSAGE_SENT"
  | "INVALID_REQUEST"
  | "INVALID_FORM"
  | "SERVICE_UNAVAILABLE"
  | "EMAIL_SEND_FAILED";

function jsonResponse(
  code: ContactResponseCode,
  status: number
) {
  return Response.json(
    { code },
    {
      status,
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}

export async function POST(request: Request) {
  const contentLength = Number(
    request.headers.get("content-length") ?? 0
  );

  if (
    !Number.isFinite(contentLength) ||
    contentLength > MAX_REQUEST_SIZE
  ) {
    return jsonResponse("INVALID_REQUEST", 413);
  }

  let requestBody: unknown;

  try {
    const rawBody = await request.text();

    if (
      rawBody.length === 0 ||
      rawBody.length > MAX_REQUEST_SIZE
    ) {
      return jsonResponse("INVALID_REQUEST", 400);
    }

    requestBody = JSON.parse(rawBody);
  } catch {
    return jsonResponse("INVALID_REQUEST", 400);
  }

  const formResult =
    contactFormSchema.safeParse(requestBody);

  if (!formResult.success) {
    return jsonResponse("INVALID_FORM", 400);
  }

  const environmentResult =
    contactEnvironmentSchema.safeParse(
      process.env
    );

  if (!environmentResult.success) {
    console.error(
      "Contact email service is not configured."
    );

    return jsonResponse(
      "SERVICE_UNAVAILABLE",
      503
    );
  }

  const {
    RESEND_API_KEY,
    CONTACT_FROM_EMAIL,
    CONTACT_TO_EMAIL
  } = environmentResult.data;
  const {
    name,
    email,
    subject,
    message
  } = formResult.data;

  const resend = new Resend(RESEND_API_KEY);
  const safeSubject = subject.replace(
    /[\r\n]+/g,
    " "
  );

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${safeSubject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message
      ].join("\n")
    });

    if (error) {
      console.error(
        "Contact email delivery failed."
      );

      return jsonResponse(
        "EMAIL_SEND_FAILED",
        502
      );
    }
  } catch {
    console.error(
      "Contact email delivery failed."
    );

    return jsonResponse(
      "EMAIL_SEND_FAILED",
      502
    );
  }

  return jsonResponse("MESSAGE_SENT", 200);
}
