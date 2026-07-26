import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiCode,
  FiDownload,
  FiLayers
} from "react-icons/fi";


export function Hero() {
  return (
    <section
      className="hero about-overview"
      aria-labelledby="about-page-title"
    >
      <div className="container hero-inner">
        <div className="hero-copy-block">
        <p className="about-eyebrow">
          About me
        </p>

        <h1 id="about-page-title">
          Hi, I&apos;m Yassir.

          <span className="about-title-highlight">
            Frontend Engineer
          </span>
        </h1>

        <p className="about-tagline">
          Frontend Engineer building React and TypeScript
          interfaces for enterprise monitoring software.
        </p>

        <p className="about-summary">
          I have over four years of experience developing
          enterprise React and TypeScript applications. I
          contributed to Centreon Map and Centreon BAM,
          modernizing legacy interfaces, building interactive
          monitoring and configuration features, integrating
          REST APIs and maintaining automated Cypress
          coverage.
        </p>

        <div className="about-focus-list">
          <article className="about-focus-item">
            <span
              className="about-focus-icon"
              aria-hidden="true"
            >
              <FiCode />
            </span>

            <div>
              <h2>React &amp; TypeScript</h2>

              <p>
                Building maintainable enterprise interfaces
                with reusable components and clear
                application architecture.
              </p>
            </div>
          </article>

          <article className="about-focus-item">
            <span
              className="about-focus-icon"
              aria-hidden="true"
            >
              <FiLayers />
            </span>

            <div>
              <h2>Legacy modernization</h2>

              <p>
                Migrating Backbone.js interfaces to modern
                React and TypeScript while preserving
                business behavior.
              </p>
            </div>
          </article>

          <article className="about-focus-item">
            <span
              className="about-focus-icon"
              aria-hidden="true"
            >
              <FiBarChart2 />
            </span>

            <div>
              <h2>Interactive applications</h2>

              <p>
                Creating complex forms, monitoring views,
                maps and data-visualization experiences.
              </p>
            </div>
          </article>
        </div>

        <div className="about-actions">
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
        </div>
      </div>
    </section>
  );
}