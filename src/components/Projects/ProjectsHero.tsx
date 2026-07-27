import {
  FiFolder,
  FiLayers
} from "react-icons/fi";

export function ProjectsHero() {
  return (
    <section
      className="hero"
      aria-labelledby="projects-page-title"
    >
      <div className="container hero-inner">
        <div className="hero-copy-block">
        <p className="projects-eyebrow">
          Selected work
        </p>

        <h1 id="projects-page-title">
          Projects built for{" "}
          <span>real-world problems.</span>
        </h1>

        <p className="projects-hero-description">
          A selection of enterprise products, personal
          projects and learning experiments focused on
          frontend architecture, complex interfaces and
          maintainable React applications.
        </p>

        <div className="projects-hero-meta">
          <span>
            <FiFolder aria-hidden="true" />
            Enterprise and personal projects
          </span>

          <span>
            <FiLayers aria-hidden="true" />
            React and TypeScript focused
          </span>
          </div>
        </div>
      </div>
    </section>
  );
}