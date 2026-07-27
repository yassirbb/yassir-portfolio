import {
  FiCheck,
  FiClock,
  FiMapPin
} from "react-icons/fi";

import type { Experience } from "@/data/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({
  experience
}: ExperienceCardProps) {
  return (
    <article className="about-experience-card">
      <div className="about-experience-content">
        <header>
          <div>
            <p className="about-experience-period">
              {experience.period}
            </p>

            <h3>{experience.title}</h3>

            <p className="about-experience-company">
              {experience.company}

              {experience.engagement && (
                <span>{experience.engagement}</span>
              )}
            </p>
          </div>

          <span className="about-duration">
            <FiClock aria-hidden="true" />
            {experience.duration}
          </span>
        </header>

        <p className="about-experience-location">
          <FiMapPin aria-hidden="true" />
          {experience.location}
        </p>

        <ul className="about-responsibility-list">
          {experience.responsibilities.map(
            (responsibility) => (
              <li key={responsibility}>
                <FiCheck aria-hidden="true" />
                <span>{responsibility}</span>
              </li>
            )
          )}
        </ul>

        <ul
          className="about-technology-tags"
          aria-label={`${experience.title} technologies`}
        >
          {experience.technologies.map(
            (technology) => (
              <li key={technology}>
                {technology}
              </li>
            )
          )}
        </ul>
      </div>
    </article>
  );
}