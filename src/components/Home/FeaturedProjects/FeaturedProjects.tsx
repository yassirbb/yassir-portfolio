import { FiGrid } from "react-icons/fi";

import { getProjects } from "@/data/projects";
import { paths } from "@/config/paths";

import { ProjectCard } from "@/ui/Cards";
import { Section } from "@/ui/Section/Section";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = {
  locale: Locale;
  copy: Dictionary["home"];
  common: Dictionary["common"];
};
export function FeaturedProjects({ locale, copy, common }: Props) {

  const featuredProjects = getProjects(locale).filter(
    (project) => project.category === "enterprise"
  );
  return (
        <Section
          id="featured-projects"
          aria-labelledby="featured-projects-title"
          icon={FiGrid}
          title={copy.featuredTitle}
          titleId="featured-projects-title"
          link={{
            href: localizePath(locale, paths.routes.projects),
            label: copy.viewAllProjects
          }}
        > 
          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                variant="compact"
                lang={locale === "fr" ? "/fr" : ""}
                copy={common}
              />
            ))}
          </div>
    </Section>
  );
}
