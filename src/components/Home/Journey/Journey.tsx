import { FiClock } from "react-icons/fi";

import { journeyEntries } from "@/data/journey";

import { JourneyItem } from "@/ui/Cards";
import { Section } from "@/ui";

import { journeyIcons } from "@/icons/journey-icons";
import type { Dictionary } from "@/i18n/dictionaries";

export function Journey({ copy }: { copy: Dictionary["home"] }) {
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
