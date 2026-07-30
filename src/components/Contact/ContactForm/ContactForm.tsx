"use client";

import "./contact-form.css";

import { Button } from "@/ui/Button/Button";
import { Section } from "@/ui/Section/Section";
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState
} from "react";
import {
  FiLock,
  FiMail,
  FiSend
} from "react-icons/fi";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { contactFieldLimits } from "@/features/contact/contact-constraints";

const MAX_MESSAGE_LENGTH =
  contactFieldLimits.message.max;
const SUBMISSION_COOLDOWN_MS = 60_000;
const SUBMISSION_COOLDOWN_KEY =
  "portfolio-contact-cooldown-until";

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
  copy,
  locale
}: {
  copy: Dictionary["contact"];
  locale: Locale;
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

  const [
    cooldownRemaining,
    setCooldownRemaining
  ] = useState(0);

  const formRef = useRef<HTMLFormElement>(null);
  const hasErrors = Object.values(errors).some(Boolean);
  const isSubmitDisabled =
    isSubmitting || cooldownRemaining > 0;

  useEffect(() => {
    const updateCooldown = () => {
      const cooldownUntil = Number(
        window.localStorage.getItem(
          SUBMISSION_COOLDOWN_KEY
        ) ?? 0
      );
      const remaining = Math.max(
        0,
        Math.ceil(
          (cooldownUntil - Date.now()) / 1000
        )
      );

      setCooldownRemaining(remaining);

      if (remaining === 0) {
        window.localStorage.removeItem(
          SUBMISSION_COOLDOWN_KEY
        );
      }
    };

    updateCooldown();
    const intervalId = window.setInterval(
      updateCooldown,
      1000
    );

    return () =>
      window.clearInterval(intervalId);
  }, []);

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

    const name = values.name.trim();
    const email = values.email.trim();
    const subject = values.subject.trim();
    const message = values.message.trim();

    if (!name) {
      nextErrors.name = copy.validation.nameRequired;
    } else if (
      name.length < contactFieldLimits.name.min
    ) {
      nextErrors.name =
        copy.validation.nameTooShort;
    }

    if (!email) {
      nextErrors.email = copy.validation.emailRequired;
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )
    ) {
      nextErrors.email = copy.validation.emailInvalid;
    }

    if (!subject) {
      nextErrors.subject = copy.validation.subjectRequired;
    } else if (
      subject.length <
      contactFieldLimits.subject.min
    ) {
      nextErrors.subject =
        copy.validation.subjectTooShort;
    }

    if (!message) {
      nextErrors.message = copy.validation.messageRequired;
    } else if (
      message.length <
      contactFieldLimits.message.min
    ) {
      nextErrors.message =
        copy.validation.messageTooShort;
    }

    return nextErrors;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitDisabled) {
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
            locale,
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
        const cooldownUntil =
          Date.now() + SUBMISSION_COOLDOWN_MS;
        window.localStorage.setItem(
          SUBMISSION_COOLDOWN_KEY,
          String(cooldownUntil)
        );
        setCooldownRemaining(
          Math.ceil(
            SUBMISSION_COOLDOWN_MS / 1000
          )
        );
        return;
      }

      if (response.status === 429) {
        setFeedback(
          copy.feedback.tooManyAttempts
        );
        setFeedbackType("error");
        return;
      }

      switch (result?.code) {
        case "INVALID_REQUEST":
        case "INVALID_FORM":
          setFeedback(
            copy.validation.formInvalid
          );
          break;
        case "SPAM_DETECTED":
          setFeedback(
            copy.feedback.spamDetected
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
          hidden
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
            autoComplete="new-password"
            data-1p-ignore
            data-bwignore
            data-lpignore="true"
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
              minLength={contactFieldLimits.name.min}
              maxLength={contactFieldLimits.name.max}
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
              maxLength={contactFieldLimits.email.max}
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
              minLength={contactFieldLimits.subject.min}
              maxLength={contactFieldLimits.subject.max}
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
              minLength={contactFieldLimits.message.min}
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
            disabled={isSubmitDisabled}
          >
            <span>
              {isSubmitting
                ? copy.sending
                : cooldownRemaining > 0
                  ? copy.sendAgainIn.replace(
                      "{seconds}",
                      String(cooldownRemaining)
                    )
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
