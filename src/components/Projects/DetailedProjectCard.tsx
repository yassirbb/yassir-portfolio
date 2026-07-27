import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCheck,
  FiExternalLink,
  FiGithub
} from "react-icons/fi";

import type {
  Project,
  ProjectStatus
} from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

const statusLabels: Record<
  ProjectStatus,
  string
> = {
  production: "In production",
  "in-progress": "In progress",
  completed: "Completed"
};

export function DetailedProjectCard({
  project
}: ProjectCardProps) {
  return (
    <article className="projects-card">
      <div className="projects-card-body">
        <div>
            <header className="projects-card-header">
            <div>
                <p className="projects-card-category">
                {project.category}
                </p>

                <h2>{project.title}</h2>
            </div>

            <span
                className={[
                "projects-status",
                `projects-status-${project.status}`
                ].join(" ")}
            >
                <span aria-hidden="true" />
                {statusLabels[project.status]}
            </span>
            </header>

            <p className="projects-card-summary">
            {project.summary}
            </p>

            <p className="projects-card-description">
            {project.description}
            </p>

            <div className="projects-card-section">
            <h3>Key contributions</h3>

            <ul className="projects-responsibilities">
                {project.responsibilities.map(
                (responsibility) => (
                    <li key={responsibility}>
                    <FiCheck aria-hidden="true" />
                    <span>{responsibility}</span>
                    </li>
                )
                )}
            </ul>
            </div>

            <ul
            className="projects-technologies"
            aria-label={`${project.title} technologies`}
            >
            {project.technologies.map(
                (technology) => (
                <li key={technology}>
                    {technology}
                </li>
                )
            )}
            </ul>
        </div>

        <ProjectCardActions project={project} />
      </div>
    </article>
  );
}

type ProjectCardActionsProps = {
  project: Project;
};

function ProjectCardActions({
  project
}: ProjectCardActionsProps) {
  if (project.category === "enterprise") {
    return (
      <footer className="projects-card-footer">
        <Link
          className="projects-primary-link"
          href={`/projects/${project.slug}`}
        >
          View project details
          <FiArrowRight aria-hidden="true" />
        </Link>
      </footer>
    );
  }

  if (project.category === "personal") {
    return (
      <footer className="projects-card-footer">
        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" />
            GitHub
            <FiArrowUpRight aria-hidden="true" />
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink aria-hidden="true" />
            Live project
            <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </footer>
    );
  }

  return (
    <footer className="projects-card-footer">
      {project.repositoryUrl && (
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub aria-hidden="true" />
          GitHub
          <FiArrowUpRight aria-hidden="true" />
        </a>
      )}

      {project.blogUrl && (
        <a
          href={project.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiBookOpen aria-hidden="true" />
          Read article
          <FiArrowUpRight aria-hidden="true" />
        </a>
      )}
    </footer>
  );
}