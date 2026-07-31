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
  | "github-yassirbb"
  | "linkedin"
  | "email"
  | "whatsapp"
  | "phone";

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
    href: paths.external.github,
    external: true
  },
  {
    id: "github-yassirbb",
    label: "GitHub — yassirbb",
    href: paths.external.githubYassirbb,
    external: true
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: paths.external.linkedin,
    external: true
  },
  {
    id: "email",
    label: "Email",
    href: createMailto(contactDetails.email)
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: paths.external.whatsapp,
    external: true
  },
  {
    id: "phone",
    label: "Phone",
    href: createTelephoneLink(contactDetails.phone)
  }
] satisfies SocialLink[];
import {
  createMailto,
  createTelephoneLink,
  paths
} from "@/config/paths";
