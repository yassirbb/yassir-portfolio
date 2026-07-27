import type { Metadata } from "next";

import { ProjectsGrid } from "@/components/Projects/ProjectsGrid";
import { ProjectsHero } from "@/components/Projects/ProjectsHero";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore frontend engineering projects by Yassir Ben Boubker, including enterprise React applications, monitoring interfaces and personal work."
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  );
}