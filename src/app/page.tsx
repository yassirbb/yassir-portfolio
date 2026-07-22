export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <main
        id="main-content"
        className="design-preview"
      >
        <div className="container">
          <p className="design-preview__eyebrow">
            Portfolio foundation
          </p>

          <h1>
            Yassir Ben Boubker
          </h1>

          <p className="design-preview__description">
            Frontend Engineer building React and
            TypeScript interfaces for enterprise
            monitoring software.
          </p>

          <div className="design-preview__actions">
            <a
              className="button button-primary"
              href="#projects"
            >
              Explore projects
              <span aria-hidden="true">→</span>
            </a>

            <a
              className="button button-secondary"
              href="#contact"
            >
              Let&apos;s connect
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <section
            id="projects"
            className="design-preview__panel"
          >
            <p>Design system status</p>
            <strong>
              Fonts, colors, containers and buttons
              are working.
            </strong>
          </section>

          <div id="contact" />
        </div>
      </main>
    </>
  );
}