"use client";

import { Section } from "@/ui";
import {
  type ChangeEvent,
  type FormEvent,
  useState
} from "react";
import {
  FiLock,
  FiMail,
  FiSend
} from "react-icons/fi";

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

export function ContactForm() {
  const [values, setValues] =
    useState<ContactFormValues>(initialValues);

  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  const [feedback, setFeedback] =
    useState("");

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
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        values.email
      )
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!values.subject.trim()) {
      nextErrors.subject =
        "Please enter a subject.";
    }

    if (!values.message.trim()) {
      nextErrors.message =
        "Please enter your message.";
    }

    return nextErrors;
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      setFeedback(
        "Please correct the highlighted fields."
      );
      return;
    }

    const emailBody = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      "",
      values.message.trim()
    ].join("\n");

    const query = new URLSearchParams({
      subject: values.subject.trim(),
      body: emailBody
    });

    window.location.href =
      `mailto:benboubker.yassir@gmail.com?${query.toString()}`;

    setFeedback(
      "Your email application is opening with the prepared message."
    );
  };

  return (
    <Section id="contact" aria-labelledby="contact-title" title="Send me a message" titleId="contact-title" icon={FiMail}>
      <form
        className="contact-form"
        id="contact-form"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="contact-form-grid">
          <div className="contact-field">
            <label htmlFor="contact-name">
              Your name
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="e.g. Ahmed Benali"
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
              Your email
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="e.g. ahmed@example.com"
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
              Subject
            </label>

            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="e.g. Frontend opportunity"
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
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={7}
              maxLength={MAX_MESSAGE_LENGTH}
              placeholder="Tell me about the opportunity, project or idea..."
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
              </small>
            </div>
          </div>
        </div>

        <div className="contact-form-footer">
          <p className="contact-privacy">
            <FiLock aria-hidden="true" />

            Your information is only used to answer
            your message.
          </p>

          <button
            className="button button-primary"
            type="submit"
          >
            <span>Send message</span>
            <FiSend aria-hidden="true" />
          </button>
        </div>

        <p
          className="contact-form-feedback"
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      </form>
    </Section>
  );
}