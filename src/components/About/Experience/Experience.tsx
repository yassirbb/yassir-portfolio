import { experiences } from "@/data/experience";
import { Section } from "@/ui";

import { ExperienceCard } from "@/ui/Cards";
import { FiBriefcase } from "react-icons/fi";
export function ExperienceList() {
  return (
    <Section id="experience" aria-labelledby="experience-title" title="Professional experience" titleId="experience-title" icon={FiBriefcase}>
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