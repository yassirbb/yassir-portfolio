import { FiClock } from "react-icons/fi";

import { journeyEntries } from "@/data/journey";

import { JourneyItem } from "@/ui/Cards";
import { Section } from "@/ui";

import { journeyIcons } from "@/icons/journey-icons";

export function Journey() {
  return (
    <Section
      id="journey"
      aria-labelledby="journey-title"
      icon={FiClock}
      title="My Journey"
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