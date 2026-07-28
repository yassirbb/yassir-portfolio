import Link from "next/link";

import { Hero as HeroLayout } from "@/ui";
import { TechStack } from "./TechStack/TechStack";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { locale: Locale; copy: Dictionary["home"] };

export function Hero({ locale, copy }: Props) {
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
          {copy.eyebrow}
        </>
      }
      title={
        <>
          {copy.titleStart}
          <br />
          {copy.titleSecond}{" "}
          <span className="hero__highlight">
            {copy.titleHighlight}
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
        {copy.description}
      </p>

      <div className="hero__actions">
        <Link
          className="button button-primary"
          href="#featured-projects"
        >
          {copy.viewWork}
          <span aria-hidden="true">→</span>
        </Link>

        <Link
          className="button button-secondary"
          href={localizePath(locale, "/contact")}
        >
          {copy.connect}
        </Link>
      </div>

      <p className="hero__note">
        <span aria-hidden="true">♡</span>
        {copy.note}
      </p>
    </HeroLayout>
  );
}
