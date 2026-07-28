import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiCode,
  FiDownload,
  FiLayers
} from "react-icons/fi";

import { Hero as HeroLayout } from "@/ui";

export function Hero() {
  return (
    <HeroLayout
      variant="about"
      titleId="about-page-title"
      eyebrow="About me"
      title={
        <>
          Hi, I&apos;m Yassir.
          <span className="hero__highlight">
            Frontend Engineer
          </span>
        </>
      }
    >
      <p className="hero__tagline">
        Frontend Engineer building React and TypeScript
        interfaces for enterprise monitoring software.
      </p>

      <p className="hero__summary">
        I have over four years of experience developing
        enterprise React and TypeScript applications. I
        contributed to Centreon Map and Centreon BAM,
        modernizing legacy interfaces, building interactive
        monitoring and configuration features, integrating
        REST APIs and maintaining automated Cypress coverage.
      </p>

      <div className="hero__feature-list">
        <article className="hero__feature">
          <span className="hero__feature-icon" aria-hidden="true">
            <FiCode />
          </span>
          <div>
            <h2>React &amp; TypeScript</h2>
            <p>
              Building maintainable enterprise interfaces with
              reusable components and clear application
              architecture.
            </p>
          </div>
        </article>

        <article className="hero__feature">
          <span className="hero__feature-icon" aria-hidden="true">
            <FiLayers />
          </span>
          <div>
            <h2>Legacy modernization</h2>
            <p>
              Migrating Backbone.js interfaces to modern React
              and TypeScript while preserving business
              behavior.
            </p>
          </div>
        </article>

        <article className="hero__feature">
          <span className="hero__feature-icon" aria-hidden="true">
            <FiBarChart2 />
          </span>
          <div>
            <h2>Interactive applications</h2>
            <p>
              Creating complex forms, monitoring views, maps
              and data-visualization experiences.
            </p>
          </div>
        </article>
      </div>

      <div className="hero__actions">
        <Link
          className="button button-primary"
          href="/projects"
        >
          View my projects
          <FiArrowRight aria-hidden="true" />
        </Link>

        <a
          className="button button-secondary"
          href="/documents/yassir-ben-boubker-cv.pdf"
          download
        >
          <FiDownload aria-hidden="true" />
          Download CV
        </a>
      </div>
    </HeroLayout>
  );
}
