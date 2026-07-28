import {
  FiFolder,
  FiLayers
} from "react-icons/fi";

import { Hero } from "@/ui";

export function ProjectsHero() {
  return (
    <Hero
      variant="projects"
      titleId="projects-page-title"
      eyebrow="Selected work"
      title={
        <>
          Projects built for{" "}
          <span className="hero__highlight">
            real-world problems.
          </span>
        </>
      }
    >
      <p className="hero__description">
        A selection of enterprise products, personal projects
        and learning experiments focused on frontend
        architecture, complex interfaces and maintainable
        React applications.
      </p>

      <div className="hero__meta">
        <span>
          <FiFolder aria-hidden="true" />
          Enterprise and personal projects
        </span>
        <span>
          <FiLayers aria-hidden="true" />
          React and TypeScript focused
        </span>
      </div>
    </Hero>
  );
}
