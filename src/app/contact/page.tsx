import { ContactForm } from "@/components/Contact/ContactForm/ContactForm";
import { ContactHero } from "@/components/Contact/Hero/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Contact Yassir Ben Boubker regarding frontend engineering opportunities, React projects and professional collaborations.",

  alternates: {
    canonical: "/contact"
  }
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
