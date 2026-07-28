import type { Metadata } from "next";

import { Hero } from "@/components/Home/Hero/Hero";
import { FeaturedProjects } from "@/components/Home/FeaturedProjects/FeaturedProjects";
import { Certifications } from "@/components/Home/Certifications/Certifications";

export const metadata: Metadata = {
  title: "Frontend Engineer",

  description:
    "Portfolio of Yassir Ben Boubker, a Frontend Engineer specializing in React, TypeScript and enterprise web interfaces.",

  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <main id="main-content">
        <Hero />
        <FeaturedProjects />
        <Certifications />
      </main>
    </>
  );
}