"use client";

import "./contact-form.css";

import { Button } from "@/ui/Button/Button";
import { Section } from "@/ui/Section/Section";
import {
  type ChangeEvent,
  type FormEvent,
  useRef,
  useState
} from "react";
import {
  FiLock,
  FiMail,
  FiSend
} from "react-icons/fi";
import type { Dictionary } from "@/i18n/dictionaries";

const MAX_MESSAGE_LENGTH = 1500;

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function ContactForm({
  copy
}: {
  copy: Dictionary["contact"];
}) {
  const [values, setValues] =
    useState<ContactFormValues>(initialValues);

  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  const [feedback, setFeedback] =
    useState("");

  const [feedbackType, setFeedbackType] =
    useState<"success" | "error" | null>(
      null
    );

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [honeypotValue, setHoneypotValue] =
    useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const hasErrors = Object.values(errors).some(Boolean);

  const updateField = (
    field: keyof ContactFormValues,
    value: string
  ) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined
    }));

    setFeedback("");
    setFeedbackType(null);
  };

  const handleMessageChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    updateField(
      "message",
      event.target.value.slice(
        0,
        MAX_MESSAGE_LENGTH
      )
    );
  };

  const validateForm = (): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = copy.validation.nameRequired;
    }

    if (!values.email.trim()) {
      nextErrors.email = copy.validation.emailRequired;
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        values.email
      )
    ) {
      nextErrors.email = copy.validation.emailInvalid;
    }

    if (!values.subject.trim()) {
      nextErrors.subject = copy.validation.subjectRequired;
    }

    if (!values.message.trim()) {
      nextErrors.message = copy.validation.messageRequired;
    }

    return nextErrors;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const validationErrors = validateForm();

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      setFeedback(copy.validation.formInvalid);
      setFeedbackType("error");

      const firstInvalidField =
        Object.keys(validationErrors)[0];

      window.requestAnimationFrame(() => {
        formRef.current
          ?.querySelector<HTMLElement>(
            `[name="${firstInvalidField}"]`
          )
          ?.focus();
      });

      return;
    }

    setIsSubmitting(true);
    setFeedback("");
    setFeedbackType(null);

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...values,
            website: honeypotValue
          })
        }
      );

      const result = (await response
        .json()
        .catch(() => null)) as {
        code?: string;
      } | null;

      if (
        response.ok &&
        result?.code === "MESSAGE_SENT"
      ) {
        setValues(initialValues);
        setErrors({});
        setHoneypotValue("");
        setFeedback(copy.feedback.sendSuccess);
        setFeedbackType("success");
        return;
      }

      switch (result?.code) {
        case "INVALID_REQUEST":
        case "INVALID_FORM":
          setFeedback(
            copy.validation.formInvalid
          );
          break;
        case "RATE_LIMITED":
          setFeedback(
            copy.feedback.tooManyAttempts
          );
          break;
        case "SERVICE_UNAVAILABLE":
          setFeedback(
            copy.feedback.serviceUnavailable
          );
          break;
        default:
          setFeedback(copy.feedback.sendError);
      }

      setFeedbackType("error");
    } catch {
      setFeedback(copy.feedback.sendError);
      setFeedbackType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" aria-labelledby="contact-title" title={copy.formTitle} titleId="contact-title" icon={FiMail}>
      <form
        ref={formRef}
        className="contact-form"
        id="contact-form"
        noValidate
        aria-busy={isSubmitting}
        onSubmit={handleSubmit}
      >
        <div
          className="visually-hidden"
          aria-hidden="true"
        >
          <label htmlFor="contact-website">
            Website
          </label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypotValue}
            onChange={(event) =>
              setHoneypotValue(
                event.target.value
              )
            }
          />
        </div>

        <div className="contact-form-grid">
          <div className="contact-field">
            <label htmlFor="contact-name">
              {copy.name}
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder={copy.placeholders.name}
              autoComplete="name"
              value={values.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name
                  ? "contact-name-error"
                  : undefined
              }
              onChange={(event) =>
                updateField(
                  "name",
                  event.target.value
                )
              }
              required
            />

            <small
              className="contact-field-error"
              id="contact-name-error"
            >
              {errors.name}
            </small>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">
              {copy.email}
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder={copy.placeholders.email}
              autoComplete="email"
              value={values.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email
                  ? "contact-email-error"
                  : undefined
              }
              onChange={(event) =>
                updateField(
                  "email",
                  event.target.value
                )
              }
              required
            />

            <small
              className="contact-field-error"
              id="contact-email-error"
            >
              {errors.email}
            </small>
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="contact-subject">
              {copy.subject}
            </label>

            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder={copy.placeholders.subject}
              value={values.subject}
              aria-invalid={Boolean(
                errors.subject
              )}
              aria-describedby={
                errors.subject
                  ? "contact-subject-error"
                  : undefined
              }
              onChange={(event) =>
                updateField(
                  "subject",
                  event.target.value
                )
              }
              required
            />

            <small
              className="contact-field-error"
              id="contact-subject-error"
            >
              {errors.subject}
            </small>
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="contact-message">
              {copy.message}
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={7}
              maxLength={MAX_MESSAGE_LENGTH}
              placeholder={copy.placeholders.message}
              value={values.message}
              aria-invalid={Boolean(
                errors.message
              )}
              aria-describedby="contact-message-error contact-character-count"
              onChange={handleMessageChange}
              required
            />

            <div className="contact-message-footer">
              <small
                className="contact-field-error"
                id="contact-message-error"
              >
                {errors.message}
              </small>

              <small id="contact-character-count">
                {values.message.length} /{" "}
                {MAX_MESSAGE_LENGTH}
                <span className="visually-hidden">
                  {" "}
                  {copy.characterCount}
                </span>
              </small>
            </div>
          </div>
        </div>

        <div className="contact-form-footer">
          <p className="contact-privacy">
            <FiLock aria-hidden="true" />

            {copy.privacy}
          </p>

          <Button
            type="submit"
            disabled={isSubmitting}
          >
            <span>
              {isSubmitting
                ? copy.sending
                : copy.send}
            </span>
            <FiSend aria-hidden="true" />
          </Button>
        </div>

        <p
          className={[
            "contact-form-feedback",
            feedbackType === "error"
              ? "is-error"
              : ""
          ]
            .filter(Boolean)
            .join(" ")}
          role={
            hasErrors || feedbackType === "error"
              ? "alert"
              : "status"
          }
          aria-live={
            hasErrors || feedbackType === "error"
              ? "assertive"
              : "polite"
          }
          aria-atomic="true"
        >
          {feedback}
        </p>
      </form>
    </Section>
  );
}
