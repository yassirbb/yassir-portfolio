import { FiClock } from "react-icons/fi";
import "./journey.css";

import { getJourneyEntries } from "@/data/journey";

import { JourneyItem } from "@/ui/Cards/JourneyItem/JourneyItem";
import { Section } from "@/ui/Section/Section";

import { journeyIcons } from "@/icons/journey-icons";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Journey({ copy, locale }: { copy: Dictionary["home"]; locale: Locale }) {
  const journeyEntries = getJourneyEntries(locale);
  return (
    <Section
      id="journey"
      aria-labelledby="journey-title"
      icon={FiClock}
      title={copy.journeyTitle}
      titleId="journey-title"
    >
        <ol className="journey-timeline">
          {journeyEntries.map((entry) => (
            <JourneyItem
              key={entry.id}
              {...entry}
              icon={journeyIcons[entry.iconId]}
            />
          ))}
        </ol>
    </Section>
  );
}
