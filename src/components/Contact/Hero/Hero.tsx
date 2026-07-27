import type { IconType } from "react-icons";
import {
  FiCheckCircle,
  FiTarget,
  FiZap
} from "react-icons/fi";

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
    description:
      "I usually reply within 24–48 hours.",
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
    <header
      className="hero contact-overview"
      aria-labelledby="contact-page-title"
    >
        <div className="container hero-inner">
            <div className="hero-copy-block">

                <p className="contact-eyebrow">
                    Get in touch
                </p>

                <h1 id="contact-page-title">
                    Let&apos;s build something
                    <span>amazing</span>
                    together.
                </h1>

                <p className="contact-tagline">
                    I&apos;m open to new opportunities, meaningful
                    collaborations and projects where I can create
                    useful, accessible and maintainable digital
                    experiences.
                </p>

                <div className="contact-benefits">
                    {contactBenefits.map(
                    ({ id, title, description, Icon }) => (
                        <article
                        className="contact-benefit"
                        key={id}
                        >
                        <span
                            className="contact-benefit-icon"
                            aria-hidden="true"
                        >
                            <Icon />
                        </span>

                        <div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        </article>
                    )
                    )}
                </div>
            </div>
        </div>
    </header>
  );
}