import {
  FiArrowRight,
  FiBarChart2,
  FiCode,
  FiDownload,
  FiLayers
} from "react-icons/fi";

import {
  Button,
  Hero as HeroLayout,
  IconFeature
} from "@/ui";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { paths } from "@/config/paths";

type Props = { locale: Locale; copy: Dictionary["about"] };
export function Hero({ locale, copy }: Props) {
  return (
    <HeroLayout
      variant="about"
      titleId="about-page-title"
      eyebrow={copy.eyebrow}
      title={
        <>
          {copy.greeting}
          <span className="hero__highlight">
            {copy.title}
          </span>
        </>
      }
    >
      <p className="hero__tagline">
        {copy.tagline}
      </p>

      <p className="hero__summary">
        {copy.summary}
      </p>

      <div className="hero__feature-list">
        <IconFeature
          icon={FiCode}
          title={copy.features[0][0]}
          description={copy.features[0][1]}
        />
        <IconFeature
          icon={FiLayers}
          title={copy.features[1][0]}
          description={copy.features[1][1]}
        />
        <IconFeature
          icon={FiBarChart2}
          title={copy.features[2][0]}
          description={copy.features[2][1]}
        />
      </div>

      <div className="hero__actions">
        <Button
          as="link"
          href={localizePath(locale, paths.routes.projects)}
        >
          {copy.viewProjects}
          <FiArrowRight aria-hidden="true" />
        </Button>

        <Button
          as="anchor"
          variant="secondary"
          href={paths.documents.resume[locale]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDownload aria-hidden="true" />
          {copy.downloadCv}
        </Button>
      </div>
    </HeroLayout>
  );
}
