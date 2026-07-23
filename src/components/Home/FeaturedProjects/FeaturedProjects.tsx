import Link from "next/link";
import { FiGrid } from "react-icons/fi";

import { featuredProjects } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <section
      className="featured-projects-section"
      id="projects"
      aria-labelledby="featured-projects-title"
    >
      <div className="container wrapper">
        <header className="featured-projects-header">
          <div className="featured-projects-title">
            <FiGrid
              className="featured-projects-icon"
              aria-hidden="true"
            />

            <h2 id="featured-projects-title">
              Featured Projects
            </h2>
          </div>

          <Link
            className="featured-projects-link"
            href="/projects"
          >
            View all projects
            <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}