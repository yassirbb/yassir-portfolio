import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ReactNode
} from "react";
import { paths } from "@/config/paths";
import "./hero.css";

export type HeroVariant =
  | "home"
  | "about"
  | "projects"
  | "contact";

type HeroProps = Omit<
  ComponentPropsWithoutRef<"section">,
  "title"
> & {
  titleId: string;
  eyebrow: ReactNode;
  title: ReactNode;
  variant: HeroVariant;
  children?: ReactNode;
  footer?: ReactNode;
};

export function Hero({
  titleId,
  eyebrow,
  title,
  variant,
  children,
  footer,
  className,
  style,
  ...sectionProps
}: HeroProps) {
  const heroStyle = {
    "--hero-background-image":
      `url("${paths.images.heroBackground}")`,
    ...style
  } as CSSProperties;

  return (
    <section
      {...sectionProps}
      style={heroStyle}
      className={[
        "hero",
        `hero--${variant}`,
        className
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={titleId}
    >
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{eyebrow}</p>
          <h1 id={titleId}>{title}</h1>
          {children}
        </div>
      </div>

      {footer}
    </section>
  );
}
