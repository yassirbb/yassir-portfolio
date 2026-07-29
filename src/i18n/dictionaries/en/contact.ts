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
    privacy: "Your information is only used to answer your message.",
    characterCount: "characters used",
    validation: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      subjectRequired: "Please enter a subject.",
      messageRequired: "Please enter your message.",
      formInvalid: "Please correct the highlighted fields."
    },
    feedback: {
      emailOpening: "Your email application is opening with the prepared message."
    },
    emailBodyLabels: {
      name: "Name",
      email: "Email"
    },
    placeholders: {
      name: "e.g. Ahmed Benali",
      email: "e.g. ahmed@example.com",
      subject: "e.g. Frontend opportunity",
      message: "Tell me about the opportunity, project or idea..."
    }
  }
} as const;
