import type {
  ComponentPropsWithoutRef,
  ReactNode
} from "react";
import type { IconType } from "react-icons";
import Link from "next/link";

export interface SectionProps
  extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  icon: IconType;
  title: string;
  titleId: string;
  link?: {
    href: string;
    label: string;
  };
}

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export function Section({
  children,
  className,
  icon: Icon,
  title,
  titleId,
  link,
  "aria-labelledby": ariaLabelledBy,
  ...sectionProps
}: SectionProps) {
  return (
    <section
      {...sectionProps}
      className={joinClassNames("section", className)}
      aria-labelledby={ariaLabelledBy ?? titleId}
    >
      <div className="container wrapper">
        <header className="section-header">
          <div className="section-title">
            <Icon
              className="section-icon"
              aria-hidden="true"
            />

            <h2 id={titleId}>{title}</h2>
          </div>

          {link && (
            <Link
              className="section-link"
              href={link.href}
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </header>

        {children}
      </div>
    </section>
  );
}