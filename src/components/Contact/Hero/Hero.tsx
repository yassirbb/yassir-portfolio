import type { IconType } from "react-icons";
import {
  FiCheckCircle,
  FiTarget,
  FiZap
} from "react-icons/fi";

import {
  Hero,
  IconFeature
} from "@/ui";

type ContactBenefit = {
  id: string;
  title: string;
  description: string;
  Icon: IconType;
};

const contactBenefits = [
  {
    id: "fast-response",
    title: "Fast response",
    description: "I usually reply within 24–48 hours.",
    Icon: FiZap
  },
  {
    id: "professional",
    title: "Professional",
    description:
      "Clear communication and reliable collaboration.",
    Icon: FiCheckCircle
  },
  {
    id: "results-driven",
    title: "Results driven",
    description:
      "Focused on useful outcomes and quality delivery.",
    Icon: FiTarget
  }
] satisfies ContactBenefit[];

export function ContactHero() {
  return (
    <Hero
      variant="contact"
      titleId="contact-page-title"
      eyebrow="Get in touch"
      title={
        <>
          Let&apos;s build something
          <span className="hero__highlight">
            amazing
          </span>
          together.
        </>
      }
    >
      <p className="hero__tagline">
        I&apos;m open to new opportunities, meaningful
        collaborations and projects where I can create useful,
        accessible and maintainable digital experiences.
      </p>

      <div className="contact-benefits">
        {contactBenefits.map(
          ({ id, title, description, Icon }) => (
            <IconFeature
              key={id}
              icon={Icon}
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
