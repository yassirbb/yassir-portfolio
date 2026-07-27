import { FiGrid } from "react-icons/fi";

import {  projects } from "@/data/projects";

import { ProjectCard } from "@/ui/Cards";
import { Section } from "@/ui/Section/Section";

export function FeaturedProjects() {
  return (
        <Section
          id="featured-projects"
          aria-labelledby="featured-projects-title"
          icon={FiGrid}
          title="Featured Projects"
          titleId="featured-projects-title"
          link={{
            href: "/projects",
            label: "View all projects"
          }}
        > 
          <div className="featured-projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                {...project}
              />
            ))}
          </div>
    </Section>
  );
}