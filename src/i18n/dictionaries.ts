const en = {
  metadata: {
    homeTitle: "Frontend Engineer",
    homeDescription: "Portfolio of Yassir Ben Boubker, a Frontend Engineer specializing in React, TypeScript and enterprise web interfaces.",
    aboutTitle: "About",
    aboutDescription: "Learn about Yassir Ben Boubker, his frontend engineering experience, technical skills and professional journey.",
    projectsTitle: "Projects",
    projectsDescription: "Explore enterprise, personal and learning projects built by Frontend Engineer Yassir Ben Boubker.",
    contactTitle: "Contact",
    contactDescription: "Contact Yassir Ben Boubker regarding frontend engineering opportunities, React projects and professional collaborations."
  },
  common: {
    viewDocumentation: "View documentation",
    openProjectDocumentation: "Open documentation for",
    github: "GitHub",
    liveProject: "Live project",
    readArticle: "Read article",
    keyContributions: "Key contributions",
    technologies: "technologies",
    ongoing: "Ongoing",
    viewCredential: "View credential",
    credentialSoon: "Credential link coming soon",
    status: {
      production: "In production",
      "in-progress": "In progress",
      completed: "Completed"
    },
    category: {
      enterprise: "Enterprise",
      personal: "Personal",
      pet: "Learning"
    }
  },
  navigation: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    connect: "Let's connect",
    homepageLabel: "Go to homepage",
    primaryLabel: "Primary navigation",
    languageLabel: "Select language",
    open: "Open navigation",
    close: "Close navigation"
  },
  home: {
    eyebrow: "Frontend Engineer",
    titleStart: "I build solutions.",
    titleSecond: "I create",
    titleHighlight: "impact.",
    description: "I design and build clean, scalable and user-focused interfaces. I turn complex product requirements into reliable digital experiences with React and TypeScript.",
    viewWork: "View my work",
    connect: "Let's connect",
    note: "Building with passion. Driven by purpose.",
    featuredTitle: "Featured Projects",
    viewAllProjects: "View all projects",
    certificationsTitle: "Certifications",
    journeyTitle: "My Journey",
    technologiesLabel: "Main technologies"
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist, may have moved or is not available in this version of the portfolio.",
    backHome: "Back to homepage",
    viewProjects: "View projects"
  },
  about: {
    eyebrow: "About me",
    greeting: "Hi, I'm Yassir.",
    title: "Frontend Engineer",
    tagline: "Frontend Engineer building React and TypeScript interfaces for enterprise monitoring software.",
    summary: "I have over four years of experience developing enterprise React and TypeScript applications. I contributed to Centreon Map and Centreon BAM, modernizing legacy interfaces, building interactive monitoring and configuration features, integrating REST APIs and maintaining automated Cypress coverage.",
    features: [
      ["React & TypeScript", "Building maintainable enterprise interfaces with reusable components and clear application architecture."],
      ["Legacy modernization", "Migrating Backbone.js interfaces to modern React and TypeScript while preserving business behavior."],
      ["Interactive applications", "Creating complex forms, monitoring views, maps and data-visualization experiences."]
    ],
    viewProjects: "View my projects",
    downloadCv: "Download CV",
    experienceTitle: "Experience",
    skillsTitle: "Skills and technologies"
  },
  projectsPage: {
    eyebrow: "Selected work",
    titleStart: "Projects built for",
    titleHighlight: "real-world problems.",
    description: "A selection of enterprise products, personal projects and learning experiments focused on frontend architecture, complex interfaces and maintainable React applications.",
    enterpriseMeta: "Enterprise and personal projects",
    technologyMeta: "React and TypeScript focused"
  },
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
  },
  footer: {
    availabilityTitle: "Availability",
    availability: "Open to opportunities",
    availabilityDescription: "I'm currently interested in frontend engineering opportunities, product-focused teams, remote collaboration and selected freelance projects.",
    types: ["Full-time", "Freelance", "Consulting", "Remote"],
    connectTitle: "Let's connect",
    connectDescription: "Follow my work, learning journey and professional progress.",
    rights: "All rights reserved.",
    madeWith: "Designed and built with",
    coffee: "and lots of coffee",
    motto: "Always learning. Always building. Always improving.",
    backToTop: "Back to top"
  }
} as const;

const fr: DictionaryShape = {
  metadata: {
    homeTitle: "Ingénieur Frontend",
    homeDescription: "Portfolio de Yassir Ben Boubker, ingénieur frontend spécialisé en React, TypeScript et interfaces web d'entreprise.",
    aboutTitle: "À propos",
    aboutDescription: "Découvrez Yassir Ben Boubker, son expérience en ingénierie frontend, ses compétences techniques et son parcours professionnel.",
    projectsTitle: "Projets",
    projectsDescription: "Découvrez les projets professionnels, personnels et d'apprentissage réalisés par Yassir Ben Boubker.",
    contactTitle: "Contact",
    contactDescription: "Contactez Yassir Ben Boubker pour des opportunités frontend, des projets React et des collaborations professionnelles."
  },
  common: {
    viewDocumentation: "Voir la documentation",
    openProjectDocumentation: "Ouvrir la documentation de",
    github: "GitHub",
    liveProject: "Voir le projet",
    readArticle: "Lire l'article",
    keyContributions: "Contributions principales",
    technologies: "technologies",
    ongoing: "En cours",
    viewCredential: "Voir le certificat",
    credentialSoon: "Lien du certificat bientôt disponible",
    status: { production: "En production", "in-progress": "En cours", completed: "Terminé" },
    category: { enterprise: "Entreprise", personal: "Personnel", pet: "Apprentissage" }
  },
  navigation: {
    home: "Accueil", about: "À propos", projects: "Projets", contact: "Contact",
    connect: "Échangeons", homepageLabel: "Aller à l'accueil",
    primaryLabel: "Navigation principale", languageLabel: "Choisir la langue",
    open: "Ouvrir la navigation", close: "Fermer la navigation"
  },
  home: {
    eyebrow: "Ingénieur Frontend", titleStart: "Je conçois des solutions.",
    titleSecond: "Je crée de", titleHighlight: "l'impact.",
    description: "Je conçois et développe des interfaces propres, évolutives et centrées sur l'utilisateur. Je transforme des besoins produit complexes en expériences numériques fiables avec React et TypeScript.",
    viewWork: "Voir mes projets", connect: "Échangeons", note: "Construire avec passion. Avancer avec un objectif.",
    featuredTitle: "Projets sélectionnés", viewAllProjects: "Voir tous les projets",
    certificationsTitle: "Certifications", journeyTitle: "Mon parcours",
    technologiesLabel: "Technologies principales"
  },
  notFound: {
    title: "Page introuvable",
    description: "La page que vous recherchez n'existe pas, a peut-être été déplacée ou n'est pas disponible dans cette version du portfolio.",
    backHome: "Retour à l'accueil",
    viewProjects: "Voir les projets"
  },
  about: {
    eyebrow: "À propos", greeting: "Bonjour, je suis Yassir.", title: "Ingénieur Frontend",
    tagline: "Ingénieur frontend spécialisé dans les interfaces React et TypeScript pour des logiciels de supervision d'entreprise.",
    summary: "J'ai plus de quatre ans d'expérience dans le développement d'applications React et TypeScript d'entreprise. J'ai contribué à Centreon Map et Centreon BAM en modernisant des interfaces historiques, en créant des fonctionnalités interactives, en intégrant des API REST et en maintenant une couverture automatisée avec Cypress.",
    features: [
      ["React & TypeScript", "Création d'interfaces d'entreprise maintenables avec des composants réutilisables et une architecture claire."],
      ["Modernisation du legacy", "Migration d'interfaces Backbone.js vers React et TypeScript tout en préservant le comportement métier."],
      ["Applications interactives", "Création de formulaires complexes, vues de supervision, cartes et visualisations de données."]
    ],
    viewProjects: "Voir mes projets", downloadCv: "Télécharger le CV",
    experienceTitle: "Expérience", skillsTitle: "Compétences et technologies"
  },
  projectsPage: {
    eyebrow: "Travaux sélectionnés", titleStart: "Des projets conçus pour",
    titleHighlight: "des problèmes réels.",
    description: "Une sélection de produits d'entreprise, de projets personnels et d'expérimentations axés sur l'architecture frontend, les interfaces complexes et les applications React maintenables.",
    enterpriseMeta: "Projets professionnels et personnels", technologyMeta: "Axé sur React et TypeScript"
  },
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
  },
  footer: {
    availabilityTitle: "Disponibilité", availability: "Ouvert aux opportunités",
    availabilityDescription: "Je m'intéresse aux opportunités frontend, aux équipes produit, au travail à distance et à certains projets freelance.",
    types: ["Temps plein", "Freelance", "Conseil", "À distance"],
    connectTitle: "Échangeons", connectDescription: "Suivez mes projets, mon apprentissage et mon parcours professionnel.",
    rights: "Tous droits réservés.", madeWith: "Conçu et développé avec",
    coffee: "et beaucoup de café", motto: "Toujours apprendre. Toujours construire. Toujours progresser.",
    backToTop: "Retour en haut"
  }
};

type Widen<T> =
  T extends string ? string :
  T extends readonly (infer U)[] ? readonly Widen<U>[] :
  T extends object ? { readonly [K in keyof T]: Widen<T[K]> } :
  T;

type DictionaryShape = Widen<typeof en>;
export type Dictionary = DictionaryShape;
export const dictionaries = { en, fr } satisfies Record<string, DictionaryShape>;
