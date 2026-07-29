import type { JourneyEntry } from "@/data/journey";
import { IconType } from "react-icons";
import "./journey-item.css";

// import { journeyIcons } from "../../../icons/journey-icons";

interface JourneyItemProps extends JourneyEntry {
  icon: IconType;
};

export function JourneyItem({
    period,
    title,
    description,
    icon: JourneyIcon
}: JourneyItemProps) {

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
          {period}
        </p>

        <h3>{title}</h3>

        <p className="journey-description">
          {description}
        </p>
      </div>
    </li>
  );
}
