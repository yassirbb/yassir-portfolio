export type AvailabilityTone =
  | "green"
  | "blue"
  | "purple"
  | "yellow";

export type AvailabilityType = {
  id: string;
  label: string;
  tone: AvailabilityTone;
};

export type SocialLinkId =
  | "github"
  | "linkedin"
  | "email"
  | "whatsapp";

export type SocialLink = {
  id: SocialLinkId;
  label: string;
  href: string;
  external?: boolean;
};

export const contactDetails = {
  email: "benboubker.yassir@gmail.com",
  phone: "+212643009846",
  location: "Marrakech, Morocco",
  availability: "Open to opportunities"
} as const;

export const availabilityTypes = [
  {
    id: "full-time",
    label: "Full-time",
    tone: "green"
  },
  {
    id: "freelance",
    label: "Freelance",
    tone: "blue"
  },
  {
    id: "consulting",
    label: "Consulting",
    tone: "purple"
  },
  {
    id: "remote",
    label: "Remote",
    tone: "yellow"
  }
] satisfies AvailabilityType[];

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Yassir-BenBOUBKER",
    external: true
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://ma.linkedin.com/in/yassir-benboubker/fr",
    external: true
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${contactDetails.email}`
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/212643009846",
    external: true
  }
] satisfies SocialLink[];