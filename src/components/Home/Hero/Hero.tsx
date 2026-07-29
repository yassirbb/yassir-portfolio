import { Button, Hero as HeroLayout } from "@/ui";
import { TechStack } from "./TechStack/TechStack";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { paths } from "@/config/paths";

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
        <Button
          as="link"
          href={paths.anchors.featuredProjects}
        >
          {copy.viewWork}
          <span aria-hidden="true">→</span>
        </Button>

        <Button
          as="link"
          variant="secondary"
          href={localizePath(locale, paths.routes.contact)}
        >
          {copy.connect}
        </Button>
      </div>

      <p className="hero__note">
        <span aria-hidden="true">♡</span>
        {copy.note}
      </p>
    </HeroLayout>
  );
}
