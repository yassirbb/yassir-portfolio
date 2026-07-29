import { getProjects } from "@/data/projects";
import "./projects.css";
import { ProjectCard } from "@/ui/Cards/ProjectCard/ProjectCard";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { locale: Locale; copy: Dictionary["common"] };
export function ProjectsGrid({ locale, copy }: Props) {
  const projects = getProjects(locale);
  return (
    <div className="container projects-grid">
        {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          variant="detailed"
          lang={locale === "fr" ? "/fr" : ""}
          copy={copy}
        />
        ))}
    </div>
  );
}
