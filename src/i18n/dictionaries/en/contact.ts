export const enContact = {
  contact: {
    eyebrow: "Get in touch",
    titleStart: "Let's build something",
    titleHighlight: "amazing",
    titleEnd: "together.",
    tagline: "I'm open to new opportunities, meaningful collaborations and projects where I can create useful, accessible and maintainable digital experiences.",
    benefits: [
      ["Fast response", "I usually reply within 24–48 hours."],
      ["Professional", "Clear communication and reliable collaboration."],
      ["Results driven", "Focused on useful outcomes and quality delivery."]
    ],
    formTitle: "Send me a message",
    name: "Your name",
    email: "Your email",
    subject: "Subject",
    message: "Message",
    send: "Send message",
    sending: "Sending...",
    sendAgainIn: "Send again in {seconds}s",
    privacy: "Your information is only used to answer your message.",
    characterCount: "characters used",
    validation: {
      nameRequired: "Please enter your name.",
      nameTooShort: "Your name must contain at least 2 characters.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      subjectRequired: "Please enter a subject.",
      subjectTooShort: "The subject must contain at least 2 characters.",
      messageRequired: "Please enter your message.",
      messageTooShort: "Your message must contain at least 10 characters.",
      formInvalid: "Please correct the highlighted fields."
    },
    feedback: {
      sendSuccess: "Your message was sent successfully. Please wait before sending another message.",
      sendError: "Your message could not be sent. Please try again.",
      spamDetected: "Your submission was blocked by spam protection. Reload the page and try once without repeating the submission.",
      tooManyAttempts: "Too many attempts. Please try again later.",
      serviceUnavailable: "The contact service is temporarily unavailable. Please try again later."
    },
    placeholders: {
      name: "e.g. Ahmed Benali",
      email: "e.g. ahmed@example.com",
      subject: "e.g. Frontend opportunity",
      message: "Tell me about the opportunity, project or idea..."
    }
  }
} as const;
