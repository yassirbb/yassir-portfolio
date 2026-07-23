import { technologies } from "@/data/technologies";

import { technologyIcons } from "./technology-icons";

export function TechStack() {
  return (
    <section
      className="tech-stack-section"
      id="tech-stack"
      aria-labelledby="tech-stack-title"
    >
      <div className="tech-stack-container">
        <div className="tech-stack-intro">
          <div className="tech-stack-title-row">
            <span
              className="tech-stack-code-icon"
              aria-hidden="true"
            >
              &lt;/&gt;
            </span>

            <h2 id="tech-stack-title">
              Tech Stack
            </h2>
          </div>

          <p>
            Technologies I use to build modern and performant
            web applications.
          </p>
        </div>

        <ul
          className="tech-stack-list"
          aria-label="Main technologies"
        >
          {technologies.map((technology) => {
            const TechnologyIcon =
              technologyIcons[technology.id];

            return (
              <li
                className="tech-card"
                key={technology.id}
              >
                <TechnologyIcon
                  className={[
                    "tech-card-icon",
                    technology.className
                  ].join(" ")}
                  size={30}
                  aria-hidden="true"
                />

                <span>{technology.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}