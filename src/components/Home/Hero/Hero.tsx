import Link from "next/link";

import { TechStack } from "@/components/Home/TechStack/TechStack";

export function Hero() {
  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="container hero-inner">
        <div className="hero-copy-block">
          <p className="eyebrow">
            <span
              className="status-dot"
              aria-hidden="true"
            />

            Frontend Engineer
          </p>

          <h1 id="hero-title">
            I build solutions.
            <br />
            I create{" "}
            <span className="gradient-text">
              impact.
            </span>
          </h1>

          <p className="hero-copy">
            I design and build clean, scalable and
            user-focused interfaces. I turn complex product
            requirements into reliable digital experiences
            with React and TypeScript.
          </p>

          <div className="hero-actions">
            <Link
              className="button button-primary"
              href="#projects"
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

          <p className="hero-note">
            <span aria-hidden="true">♡</span>
            Building with passion. Driven by purpose.
          </p>
        </div>
      </div>

      <div className="container hero-tech-wrap">
        <TechStack />
      </div>
    </section>
  );
}