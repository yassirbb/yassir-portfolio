import type {
  ComponentPropsWithoutRef,
  ReactNode
} from "react";
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
  ...sectionProps
}: HeroProps) {
  return (
    <section
      {...sectionProps}
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
