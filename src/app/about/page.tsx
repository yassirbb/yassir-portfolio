import type { Metadata } from "next";

import { Hero } from "@/components/About/Hero/Hero";
import { Journey } from "@/components/Home/Journey/Journey";
import { ExperienceList } from "@/components/About/Experience/Experience";
import { SkillsSection } from "@/components/About/SkillsSection/SkillsSection";

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn about Yassir Ben Boubker, his frontend engineering experience, technical skills and professional journey.",

  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <main id="main-content">
        <Hero />
        <Journey />
        <ExperienceList />
        <SkillsSection />
      </main>
    </>
  );
}