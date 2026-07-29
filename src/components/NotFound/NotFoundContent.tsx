import {
  FiArrowLeft,
  FiCompass
} from "react-icons/fi";

import { Button } from "@/ui";
import { paths } from "@/config/paths";
import {
  localizePath,
  type Locale
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = {
  locale: Locale;
  copy: Dictionary["notFound"];
};

export function NotFoundContent({
  locale,
  copy
}: Props) {
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

        <p className="not-found-code">404</p>

        <h1>{copy.title}</h1>

        <p className="not-found-description">
          {copy.description}
        </p>

        <div className="not-found-actions">
          <Button
            as="link"
            href={localizePath(
              locale,
              paths.routes.home
            )}
          >
            <FiArrowLeft aria-hidden="true" />
            {copy.backHome}
          </Button>

          <Button
            as="link"
            variant="secondary"
            href={localizePath(
              locale,
              paths.routes.projects
            )}
          >
            {copy.viewProjects}
          </Button>
        </div>
      </div>
    </main>
  );
}
