import type { JourneyEntry } from "@/data/journey";

import { journeyIcons } from "./journey-icons";

type JourneyItemProps = {
  entry: JourneyEntry;
};

export function JourneyItem({
  entry
}: JourneyItemProps) {
  const JourneyIcon = journeyIcons[entry.iconId];

  return (
    <li className="journey-item">
      <div
        className="journey-marker"
        aria-hidden="true"
      >
        <JourneyIcon className="journey-icon" />
      </div>

      <div className="journey-content">
        <p className="journey-period">
          {entry.period}
        </p>

        <h3>{entry.title}</h3>

        <p className="journey-description">
          {entry.description}
        </p>
      </div>
    </li>
  );
}