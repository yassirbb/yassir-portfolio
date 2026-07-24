import { FiClock } from "react-icons/fi";

import { journeyEntries } from "@/data/journey";

import { JourneyItem } from "./JourneyItem";

export function Journey() {
  return (
    <section
      className="journey-section"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="container wrapper">
        <header className="journey-heading">
          <FiClock
            className="journey-heading-icon"
            aria-hidden="true"
          />

          <h2 id="journey-title">
            My Journey
          </h2>
        </header>

        <ol className="journey-timeline">
          {journeyEntries.map((entry) => (
            <JourneyItem
              key={entry.id}
              entry={entry}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}