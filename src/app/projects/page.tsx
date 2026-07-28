import type { Metadata } from "next";

import { ProjectsGrid } from "@/components/Projects/ProjectsGrid";
import { ProjectsHero } from "@/components/Projects/ProjectsHero";

export const metadata: Metadata = {
  title: "Projects",

  description:
    "Explore enterprise, personal and learning projects built by Frontend Engineer Yassir Ben Boubker.",

  alternates: {
    canonical: "/projects"
  }
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  );
}