export const frContact = {
  contact: {
    eyebrow: "Prendre contact", titleStart: "Construisons quelque chose",
    titleHighlight: "d'exceptionnel", titleEnd: "ensemble.",
    tagline: "Je suis ouvert aux nouvelles opportunités, aux collaborations utiles et aux projets où je peux créer des expériences numériques accessibles et maintenables.",
    benefits: [
      ["Réponse rapide", "Je réponds généralement sous 24 à 48 heures."],
      ["Professionnel", "Une communication claire et une collaboration fiable."],
      ["Orienté résultats", "Des résultats utiles et une livraison de qualité."]
    ],
    formTitle: "Envoyez-moi un message", name: "Votre nom", email: "Votre e-mail",
    subject: "Sujet", message: "Message", send: "Envoyer le message",
    privacy: "Vos informations sont uniquement utilisées pour répondre à votre message.",
    characterCount: "caractères utilisés",
    validation: {
      nameRequired: "Veuillez saisir votre nom.",
      emailRequired: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      subjectRequired: "Veuillez saisir un sujet.",
      messageRequired: "Veuillez saisir votre message.",
      formInvalid: "Veuillez corriger les champs indiqués."
    },
    feedback: {
      emailOpening: "Votre application de messagerie s'ouvre avec le message préparé."
    },
    emailBodyLabels: {
      name: "Nom",
      email: "E-mail"
    },
    placeholders: {
      name: "ex. Ahmed Benali", email: "ex. ahmed@example.com",
      subject: "ex. Opportunité frontend", message: "Parlez-moi de l'opportunité, du projet ou de votre idée..."
    }
  }
} as const;
