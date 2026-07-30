import Image from "next/image";
import "./project-card.css";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheck,
  FiExternalLink,
  FiGithub
} from "react-icons/fi";

import type {
  Project
} from "@/data/projects";
import { TagList } from "@/ui/TagList/TagList";
import type { Dictionary } from "@/i18n/dictionaries";

export type ProjectCardVariant = "compact" | "detailed";

type ProjectCardProps = {
  project: Project;
  variant?: ProjectCardVariant;
  lang?: string;
  copy: Dictionary["common"];
};

function getDocumentationUrl(
  project: Project,
  lang: string
) {
  const documentation = project.links.doc;

  if (!documentation) {
    return undefined;
  }

  return `${documentation.host}${lang}${documentation.path}`;
}

export function ProjectCard({
  project,
  variant = "compact",
  lang = "",
  copy
}: ProjectCardProps) {
  const className = [
    "project-card",
    `project-card--${variant}`
  ].join(" ");

  if (variant === "detailed") {
    return (
      <DetailedProjectCard
        className={className}
        project={project}
        lang={lang}
        copy={copy}
      />
    );
  }

  return (
    <CompactProjectCard
      className={className}
      project={project}
      lang={lang}
      copy={copy}
    />
  );
}

type ProjectCardViewProps = {
  className: string;
  project: Project;
  lang: string;
  copy: Dictionary["common"];
};

function CompactProjectCard({
  className,
  project
}: ProjectCardViewProps) {
  return (
    <article className={className}>
      <div className="project-card__media">
        <Image
          className="project-card__image"
          src={project.image.src}
          alt={project.image.alt}
          width={720}
          height={405}
        />
      </div>

      <div className="project-card__content">
        <div>
          <h3>{project.title}</h3>
          <p className="project-card__description">
            {project.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function DetailedProjectCard({
  className,
  project,
  lang,
  copy
}: ProjectCardViewProps) {
  return (
    <article className={className}>
      <div className="project-card__content">
        <div>
          <header className="project-card__header">
            <div>
              <p className="project-card__category">
                {copy.category[project.category]}
                {project.year ? ` · ${project.year}` : ""}
              </p>
              <h2>{project.title}</h2>
            </div>

            <span
              className={[
                "project-card__status",
                `project-card__status--${project.status}`
              ].join(" ")}
            >
              <span aria-hidden="true" />
              {copy.status[project.status]}
            </span>
          </header>

          <p className="project-card__summary">
            {project.summary}
          </p>
          <p className="project-card__description">
            {project.description}
          </p>

          <section className="project-card__section">
            <h3>{copy.keyContributions}</h3>
            <ul className="project-card__responsibilities">
              {project.responsibilities.map(
                (responsibility) => (
                  <li key={responsibility}>
                    <FiCheck aria-hidden="true" />
                    <span>{responsibility}</span>
                  </li>
                )
              )}
            </ul>
          </section>

          <TagList
            className="project-card__technologies"
            items={project.technologies}
            label={`${project.title} ${copy.technologies}`}
          />
        </div>

        <ProjectCardActions
          project={project}
          lang={lang}
          copy={copy}
        />
      </div>
    </article>
  );
}

type ProjectCardActionsProps = {
  project: Project;
  lang: string;
  copy: Dictionary["common"];
};

function ProjectCardActions({
  project,
  lang,
  copy
}: ProjectCardActionsProps) {
  const documentationUrl = getDocumentationUrl(
    project,
    lang
  );
  const githubUrl =
    project.links.github ?? project.repositoryUrl;
  const demoUrl =
    project.links.demo ?? project.liveUrl;
  const blogUrl =
    project.links.blog ?? project.blogUrl;

  if (
    !documentationUrl &&
    !githubUrl &&
    !demoUrl &&
    !blogUrl
  ) {
    return null;
  }

  return (
    <footer className="project-card__footer">
      {documentationUrl && (
        <ProjectActionLink
          href={documentationUrl}
          label={copy.viewDocumentation}
          opensInNewTab={copy.opensInNewTab}
        />
      )}
      {githubUrl && (
        <ProjectActionLink
          href={githubUrl}
          label={copy.github}
          opensInNewTab={copy.opensInNewTab}
          icon={<FiGithub aria-hidden="true" />}
        />
      )}
      {demoUrl && (
        <ProjectActionLink
          href={demoUrl}
          label={copy.liveProject}
          opensInNewTab={copy.opensInNewTab}
          icon={<FiExternalLink aria-hidden="true" />}
        />
      )}
      {blogUrl && (
        <ProjectActionLink
          href={blogUrl}
          label={copy.readArticle}
          opensInNewTab={copy.opensInNewTab}
          icon={<FiBookOpen aria-hidden="true" />}
        />
      )}
    </footer>
  );
}

type ProjectActionLinkProps = {
  href: string;
  label: string;
  opensInNewTab: string;
  icon?: React.ReactNode;
};

function ProjectActionLink({
  href,
  label,
  opensInNewTab,
  icon
}: ProjectActionLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (${opensInNewTab})`}
    >
      {icon}
      {label}
      <FiArrowUpRight aria-hidden="true" />
    </a>
  );
}
