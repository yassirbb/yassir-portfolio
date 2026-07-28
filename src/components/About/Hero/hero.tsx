import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiCode,
  FiDownload,
  FiLayers
} from "react-icons/fi";

import {
  Hero as HeroLayout,
  IconFeature
} from "@/ui";

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
        <IconFeature
          icon={FiCode}
          title="React & TypeScript"
          description="Building maintainable enterprise interfaces with reusable components and clear application architecture."
        />
        <IconFeature
          icon={FiLayers}
          title="Legacy modernization"
          description="Migrating Backbone.js interfaces to modern React and TypeScript while preserving business behavior."
        />
        <IconFeature
          icon={FiBarChart2}
          title="Interactive applications"
          description="Creating complex forms, monitoring views, maps and data-visualization experiences."
        />
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
