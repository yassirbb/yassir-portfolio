"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { type Language, useLanguage } from "@/hooks/useLanguage";
import { useMobileMenu } from "@/hooks/useMobileMenu";

const navigationItems = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Projects",
    href: "/projects"
  },
  {
    label: "Journey",
    href: "/journey"
  },
  {
    label: "Contact",
    href: "/contact"
  }
] as const;

type HeaderProps = {
  initialLanguage: Language;
};

export function Header({
  initialLanguage
}: HeaderProps) {
  const pathname = usePathname();

  const {
    language,
    setLanguage
  } = useLanguage(initialLanguage);

  const {
    isMenuOpen,
    menuButtonRef,
    hasMenuInteraction,
    firstMenuLinkRef,
    closeMenu,
    toggleMenu
  } = useMobileMenu();

  function isActiveRoute(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-inner">
          <Link
            className="brand"
            href="/"
            aria-label="Go to homepage"
          >
            <Image
              className="brand-logo"
              src="/yb-logo.webp"
              alt="brand logo"
              width={52}
              height={52}
              priority
            />
          </Link>

        <nav
        className={[
            "main-nav",
            hasMenuInteraction
            ? "has-menu-interaction"
            : "",
            isMenuOpen ? "is-open" : ""
        ]
            .filter(Boolean)
            .join(" ")}
        id="primary-navigation"
        aria-label="Primary navigation"
        >
            {navigationItems.map(
              (item, index) => {
                const isActive =
                  isActiveRoute(item.href);

                return (
                  <Link
                    key={item.href}
                    ref={
                      index === 0
                        ? firstMenuLinkRef
                        : undefined
                    }
                    className={
                      isActive
                        ? "active"
                        : undefined
                    }
                    href={item.href}
                    aria-current={
                      isActive
                        ? "page"
                        : undefined
                    }
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    {item.label}
                  </Link>
                );
              }
            )}
          </nav>

          <div
            className="language-switcher"
            role="group"
            aria-label="Select language"
          >
            <button
              className={[
                "language-option",
                language === "en"
                  ? "active"
                  : ""
              ]
                .filter(Boolean)
                .join(" ")}
              type="button"
              data-language="en"
              aria-pressed={language === "en"}
              onClick={() => {
                setLanguage("en");
              }}
            >
              EN
            </button>

            <span aria-hidden="true" />

            <button
              className={[
                "language-option",
                language === "fr"
                  ? "active"
                  : ""
              ]
                .filter(Boolean)
                .join(" ")}
              type="button"
              data-language="fr"
              aria-pressed={language === "fr"}
              onClick={() => {
                setLanguage("fr");
              }}
            >
              FR
            </button>
          </div>

          <Link
            className="
              button
              button-small
              button-primary
              nav-cta
            "
            href="/contact"
          >
            Let&apos;s connect
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            ref={menuButtonRef}
            className={[
              "menu-button",
              isMenuOpen ? "is-open" : ""
            ]
              .filter(Boolean)
              .join(" ")}
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <button
          className="
            mobile-nav-overlay
            is-visible
          "
          type="button"
          aria-label="Close navigation"
          onClick={() => {
            closeMenu({
              restoreFocus: true
            });
          }}
        />
      )}
    </>
  );
}