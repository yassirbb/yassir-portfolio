import {
  FiCheckCircle,
  FiTarget,
  FiZap
} from "react-icons/fi";

import type { Dictionary } from "@/i18n/dictionaries";
import {
  Hero,
  IconFeature
} from "@/ui";

const benefitIcons = [FiZap, FiCheckCircle, FiTarget];

export function ContactHero({
  copy
}: {
  copy: Dictionary["contact"];
}) {
  return (
    <Hero
      variant="contact"
      titleId="contact-page-title"
      eyebrow={copy.eyebrow}
      title={
        <>
          {copy.titleStart}
          <span className="hero__highlight">
            {copy.titleHighlight}
          </span>
          {copy.titleEnd}
        </>
      }
    >
      <p className="hero__tagline">{copy.tagline}</p>

      <div className="contact-benefits">
        {copy.benefits.map(
          ([title, description], index) => (
            <IconFeature
              key={title}
              icon={benefitIcons[index]}
              title={title}
              description={description}
              variant="circle"
            />
          )
        )}
      </div>
    </Hero>
  );
}
