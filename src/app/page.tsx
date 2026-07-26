import type { Metadata } from "next";

import { Hero } from "@/components/Home/Hero/Hero";
import { FeaturedProjects } from "@/components/Home/FeaturedProjects/FeaturedProjects";
import { Journey } from "@/components/Home/Journey/Journey";
import { Certifications } from "@/components/Home/Certifications/Certifications";

export const metadata: Metadata = {
  title: "Frontend Engineer",
  description:
    "Portfolio of Yassir Ben Boubker, a frontend engineer specializing in React, TypeScript and data-rich interfaces."
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <main id="main-content">
        <Hero />
        {/* <Journey /> */}
        <FeaturedProjects />
        <Certifications />
      </main>
    </>
  );
}