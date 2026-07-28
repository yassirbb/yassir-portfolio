import { skillCategories } from "@/data/skills";
import {
  Section,
  TagList
} from "@/ui";
import {
  FiLayers
} from "react-icons/fi";

export function SkillsSection() {
  return (
    <Section id="skills" aria-labelledby="skills-title" title="Skills and technologies" titleId="skills-title" icon={FiLayers}>
      <div className="about-skills-grid">
        {skillCategories.map(
          ({ id, title, skills, Icon }) => (
            <article
              className="about-skill-card"
              key={id}
            >
              <span
                className="about-skill-icon"
                aria-hidden="true"
              >
                <Icon />
              </span>

              <h3>{title}</h3>

              <TagList
                className="about-skill-tags"
                items={skills}
                label={`${title} technologies`}
              />
            </article>
          )
        )}
      </div>
    </Section>
  );
}
