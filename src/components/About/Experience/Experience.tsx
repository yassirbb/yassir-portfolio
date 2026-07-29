import { getExperiences } from "@/data/experience";
import { Section } from "@/ui/Section/Section";
import "./experience.css";

import { ExperienceCard } from "@/ui/Cards/ExperienceCard/ExperienceCard";
import { FiBriefcase } from "react-icons/fi";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
export function ExperienceList({ copy, locale }: { copy: Dictionary["about"]; locale: Locale }) {
  const experiences = getExperiences(locale);
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
