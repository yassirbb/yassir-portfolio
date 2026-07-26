import { technologies } from "@/data/technologies";

import { technologyIcons } from "../../../../icons/technology-icons";

export function TechStack() {
  return (
    <section
      className="tech-stack-section"
      id="tech-stack"
      aria-labelledby="tech-stack-title"
    >
      <div className="container">
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