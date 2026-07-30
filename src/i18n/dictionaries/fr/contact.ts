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
    sending: "Envoi en cours...",
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
      sendSuccess: "Votre message a bien été envoyé.",
      sendError: "Votre message n'a pas pu être envoyé. Veuillez réessayer.",
      serviceUnavailable: "Le service de contact est temporairement indisponible. Veuillez réessayer plus tard."
    },
    placeholders: {
      name: "ex. Ahmed Benali", email: "ex. ahmed@example.com",
      subject: "ex. Opportunité frontend", message: "Parlez-moi de l'opportunité, du projet ou de votre idée..."
    }
  }
} as const;
