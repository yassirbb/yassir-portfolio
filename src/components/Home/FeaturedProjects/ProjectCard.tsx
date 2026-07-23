import Image from "next/image";
import Link from "next/link";

import type {
  Project,
} from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({
  project
}: ProjectCardProps) {
  const projectHref = `/projects/${project.slug}`;

  return (
    <article className="project-card">
      <Link
        className="project-card-image-link"
        href={projectHref}
        aria-label={`View ${project.title} project`}
      >
        <Image
          className="project-card-image"
          src={project.image.src}
          alt={project.image.alt}
          width={720}
          height={405}
        />
      </Link>

      <div className="project-card-content">
        <h3>
          <Link href={projectHref}>
            {project.title}
          </Link>
        </h3>

        <p>{project.description}</p>

        <footer className="project-card-footer">
          <Link
            className="project-card-action"
            href={projectHref}
            aria-label={`Open ${project.title} project`}
          >
            <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}