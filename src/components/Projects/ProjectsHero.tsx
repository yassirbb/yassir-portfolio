import {
  FiFolder,
  FiLayers
} from "react-icons/fi";

import { Hero } from "@/ui";
import type { Dictionary } from "@/i18n/dictionaries";

export function ProjectsHero({ copy }: { copy: Dictionary["projectsPage"] }) {
  return (
    <Hero
      variant="projects"
      titleId="projects-page-title"
      eyebrow={copy.eyebrow}
      title={
        <>
          {copy.titleStart}{" "}
          <span className="hero__highlight">
            {copy.titleHighlight}
          </span>
        </>
      }
    >
      <p className="hero__description">
        {copy.description}
      </p>

      <div className="hero__meta">
        <span>
          <FiFolder aria-hidden="true" />
          {copy.enterpriseMeta}
        </span>
        <span>
          <FiLayers aria-hidden="true" />
          {copy.technologyMeta}
        </span>
      </div>
    </Hero>
  );
}
