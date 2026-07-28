import { experiences } from "@/data/experience";
import { Section } from "@/ui";

import { ExperienceCard } from "@/ui/Cards";
import { FiBriefcase } from "react-icons/fi";
import type { Dictionary } from "@/i18n/dictionaries";
export function ExperienceList({ copy }: { copy: Dictionary["about"] }) {
  return (
    <Section id="experience" aria-labelledby="experience-title" title={copy.experienceTitle} titleId="experience-title" icon={FiBriefcase}>
        <div className="about-experience-list">
        {experiences.map((experience) => (
            <ExperienceCard
            key={experience.id}
            experience={experience}
            />
        ))}
        </div>
    </Section>
  );
}
