import { projects } from "@/data/projects";
import { ProjectCard } from "@/ui/Cards";

export function ProjectsGrid() {
  return (
    <div className="container projects-grid">
        {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          variant="detailed"
        />
        ))}
    </div>
  );
}
