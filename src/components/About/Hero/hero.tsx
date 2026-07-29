import {
  FiArrowRight,
  FiBarChart2,
  FiCode,
  FiDownload,
  FiLayers
} from "react-icons/fi";

import { Button } from "@/ui/Button/Button";
import { Hero as HeroLayout } from "@/ui/Hero/Hero";
import { IconFeature } from "@/ui/IconFeature/IconFeature";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { paths } from "@/config/paths";

type Props = {
  locale: Locale;
  copy: Dictionary["about"];
  common: Dictionary["common"];
};
export function Hero({ locale, copy, common }: Props) {
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
          aria-label={`${copy.downloadCv} (${common.opensInNewTab})`}
        >
          <FiDownload aria-hidden="true" />
          {copy.downloadCv}
        </Button>
      </div>
    </HeroLayout>
  );
}
