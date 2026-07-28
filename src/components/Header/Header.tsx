"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMobileMenu } from "@/hooks/useMobileMenu";
import {
  localizePath,
  type Locale
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type HeaderProps = {
  locale: Locale;
  copy: Dictionary["navigation"];
};

export function Header({ locale, copy }: HeaderProps) {
  const pathname = usePathname();
  const {
    isMenuOpen,
    menuButtonRef,
    hasMenuInteraction,
    firstMenuLinkRef,
    closeMenu,
    toggleMenu
  } = useMobileMenu();

  const navigationItems = [
    { label: copy.home, path: "" },
    { label: copy.about, path: "/about" },
    { label: copy.projects, path: "/projects" },
    { label: copy.contact, path: "/contact" }
  ];

  function switchLocale(nextLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-inner">
          <Link className="brand" href={localizePath(locale)} aria-label={copy.homepageLabel}>
            <Image className="brand-logo" src="/yb-logo.webp" alt="" width={52} height={52} priority />
          </Link>

          <nav
            className={["main-nav", hasMenuInteraction ? "has-menu-interaction" : "", isMenuOpen ? "is-open" : ""].filter(Boolean).join(" ")}
            id="primary-navigation"
            aria-label={copy.primaryLabel}
          >
            {navigationItems.map((item, index) => {
              const href = localizePath(locale, item.path);
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                  className={active ? "active" : undefined}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => closeMenu()}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="language-switcher" role="group" aria-label={copy.languageLabel}>
            <Link
              className={["language-option", locale === "en" ? "active" : ""].filter(Boolean).join(" ")}
              href={switchLocale("en")}
              aria-current={locale === "en" ? "page" : undefined}
              hrefLang="en"
            >
              EN
            </Link>
            <span aria-hidden="true" />
            <Link
              className={["language-option", locale === "fr" ? "active" : ""].filter(Boolean).join(" ")}
              href={switchLocale("fr")}
              aria-current={locale === "fr" ? "page" : undefined}
              hrefLang="fr"
            >
              FR
            </Link>
          </div>

          <Link className="button button-small button-primary nav-cta" href={localizePath(locale, "/contact")}>
            {copy.connect}
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            ref={menuButtonRef}
            className={["menu-button", isMenuOpen ? "is-open" : ""].filter(Boolean).join(" ")}
            type="button"
            aria-label={isMenuOpen ? copy.close : copy.open}
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <button
          className="mobile-nav-overlay is-visible"
          type="button"
          aria-label={copy.close}
          onClick={() => closeMenu({ restoreFocus: true })}
        />
      )}
    </>
  );
}
