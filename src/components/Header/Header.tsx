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
import { Button } from "@/ui/Button/Button";
import { RouteLoadingIndicator } from "@/ui/RouteLoading/RouteLoadingIndicator";
import { paths } from "@/config/paths";

type HeaderProps = {
  locale: Locale;
  copy: Dictionary["navigation"];
};

export function Header({ locale, copy }: HeaderProps) {
  const pathname = usePathname();
  const {
    isMenuOpen,
    headerRef,
    menuButtonRef,
    hasMenuInteraction,
    closeMenu,
    toggleMenu
  } = useMobileMenu();

  const navigationItems = [
    { label: copy.home, path: paths.routes.home },
    { label: copy.about, path: paths.routes.about },
    { label: copy.projects, path: paths.routes.projects },
    { label: copy.contact, path: paths.routes.contact }
  ];

  function switchLocale(nextLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }

  function rememberLocale(nextLocale: Locale) {
    document.cookie = [
      `portfolio-language=${nextLocale}`,
      "path=/",
      "max-age=31536000",
      "samesite=lax"
    ].join("; ");
  }

  return (
    <>
      <header ref={headerRef} className="site-header">
        <div className="container nav-inner">
          <Link className="brand" href={localizePath(locale)} aria-label={copy.homepageLabel} prefetch>
            <Image className="brand-logo" src={paths.images.logo} alt="" width={52} height={52} priority />
            <RouteLoadingIndicator />
          </Link>

          <nav
            className={["main-nav", hasMenuInteraction ? "has-menu-interaction" : "", isMenuOpen ? "is-open" : ""].filter(Boolean).join(" ")}
            id="primary-navigation"
            aria-label={copy.primaryLabel}
          >
            {navigationItems.map((item) => {
              const href = localizePath(locale, item.path);
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  className={active ? "active" : undefined}
                  href={href}
                  prefetch
                  aria-current={active ? "page" : undefined}
                  onClick={
                    isMenuOpen
                      ? () => closeMenu()
                      : undefined
                  }
                >
                  {item.label}
                  <RouteLoadingIndicator />
                </Link>
              );
            })}
          </nav>

          <div className="language-switcher" role="group" aria-label={copy.languageLabel}>
            <Link
              className={["language-option", locale === "en" ? "active" : ""].filter(Boolean).join(" ")}
              href={switchLocale("en")}
              prefetch
              onClick={() => rememberLocale("en")}
              aria-label={copy.switchToEnglish}
              aria-current={locale === "en" ? "page" : undefined}
              hrefLang="en"
            >
              EN
              <RouteLoadingIndicator />
            </Link>
            <span aria-hidden="true" />
            <Link
              className={["language-option", locale === "fr" ? "active" : ""].filter(Boolean).join(" ")}
              href={switchLocale("fr")}
              prefetch
              onClick={() => rememberLocale("fr")}
              aria-label={copy.switchToFrench}
              aria-current={locale === "fr" ? "page" : undefined}
              hrefLang="fr"
            >
              FR
              <RouteLoadingIndicator />
            </Link>
          </div>

          <Button
            as="link"
            className="nav-cta"
            href={localizePath(locale, paths.routes.contact)}
            size="small"
            prefetch
          >
            {copy.connect}
            <span aria-hidden="true">↗</span>
            <RouteLoadingIndicator />
          </Button>

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
