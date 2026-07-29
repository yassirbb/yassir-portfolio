import {
  FiArrowLeft,
  FiCompass
} from "react-icons/fi";

import { Button } from "@/ui";

export default function NotFound() {
  return (
    <main
      className="not-found-page"
      id="main-content"
    >
      <div className="container not-found-content">
        <span
          className="not-found-icon"
          aria-hidden="true"
        >
          <FiCompass />
        </span>

        <p className="not-found-code">
          404
        </p>

        <h1>Page not found</h1>

        <p className="not-found-description">
          The page you are looking for does not exist,
          may have moved or is not available in this
          version of the portfolio.
        </p>

        <div className="not-found-actions">
          <Button as="link" href="/">
            <FiArrowLeft aria-hidden="true" />
            Back to homepage
          </Button>

          <Button
            as="link"
            variant="secondary"
            href="/projects"
          >
            View projects
          </Button>
        </div>
      </div>
    </main>
  );
}
