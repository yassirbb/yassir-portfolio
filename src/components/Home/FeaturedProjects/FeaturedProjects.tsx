import { FiGrid } from "react-icons/fi";

import {  projects } from "@/data/projects";

import { ProjectCard } from "@/ui/Cards";
import { Section } from "@/ui/Section/Section";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { locale: Locale; copy: Dictionary["home"] };
export function FeaturedProjects({ locale, copy }: Props) {

  const featuredProjects = projects.filter((project) => project.category === "enterprise");
  return (
        <Section
          id="featured-projects"
          aria-labelledby="featured-projects-title"
          icon={FiGrid}
          title={copy.featuredTitle}
          titleId="featured-projects-title"
          link={{
            href: localizePath(locale, "/projects"),
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
              />
            ))}
          </div>
    </Section>
  );
}
