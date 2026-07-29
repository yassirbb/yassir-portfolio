import type { IconType } from "react-icons";
import "./icon-feature.css";

type IconFeatureProps = {
  title: string;
  description: string;
  icon: IconType;
  variant?: "square" | "circle";
};

export function IconFeature({
  title,
  description,
  icon: Icon,
  variant = "square"
}: IconFeatureProps) {
  return (
    <article
      className={[
        "icon-feature",
        `icon-feature--${variant}`
      ].join(" ")}
    >
      <span
        className="icon-feature__icon"
        aria-hidden="true"
      >
        <Icon />
      </span>

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}
