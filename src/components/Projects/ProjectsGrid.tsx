import { projects } from "@/data/projects";

import { DetailedProjectCard } from "./DetailedProjectCard";

export function ProjectsGrid() {
  return (
    <div className="container projects-grid">
        {projects.map((project) => (
        <DetailedProjectCard
            key={project.id}
            project={project}
        />
        ))}
    </div>
  );
}