import Link from "next/link";

import { Hero as HeroLayout } from "@/ui";
import { TechStack } from "./TechStack/TechStack";

export function Hero() {
  return (
    <HeroLayout
      id="home"
      variant="home"
      titleId="hero-title"
      eyebrow={
        <>
          <span
            className="hero__status-dot"
            aria-hidden="true"
          />
          Frontend Engineer
        </>
      }
      title={
        <>
          I build solutions.
          <br />
          I create{" "}
          <span className="hero__highlight">
            impact.
          </span>
        </>
      }
      footer={
        <div className="container hero__footer">
          <TechStack />
        </div>
      }
    >
      <p className="hero__description">
        I design and build clean, scalable and user-focused
        interfaces. I turn complex product requirements into
        reliable digital experiences with React and
        TypeScript.
      </p>

      <div className="hero__actions">
        <Link
          className="button button-primary"
          href="#featured-projects"
        >
          View my work
          <span aria-hidden="true">→</span>
        </Link>

        <Link
          className="button button-secondary"
          href="/contact"
        >
          Let&apos;s connect
        </Link>
      </div>

      <p className="hero__note">
        <span aria-hidden="true">♡</span>
        Building with passion. Driven by purpose.
      </p>
    </HeroLayout>
  );
}
