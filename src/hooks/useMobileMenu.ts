"use client";

import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

type MenuState = {
  isRequestedOpen: boolean;
  openedAtPath: string | null;
};

type CloseMenuOptions = {
  restoreFocus?: boolean;
};

export function useMobileMenu() {
  const pathname = usePathname();

  const [menuState, setMenuState] =
    useState<MenuState>({
      isRequestedOpen: false,
      openedAtPath: null
    });

  const [hasMenuInteraction, setHasMenuInteraction] =
    useState(false);

  const menuButtonRef =
    useRef<HTMLButtonElement>(null);

  const headerRef =
    useRef<HTMLElement>(null);

  const isMenuOpen =
    menuState.isRequestedOpen &&
    menuState.openedAtPath === pathname;

  const openMenu = useCallback(() => {
    setHasMenuInteraction(true);

    setMenuState({
      isRequestedOpen: true,
      openedAtPath: pathname
    });
  }, [pathname]);

  const closeMenu = useCallback(
    ({
      restoreFocus = false
    }: CloseMenuOptions = {}) => {
      setMenuState({
        isRequestedOpen: false,
        openedAtPath: null
      });

      if (restoreFocus) {
        window.requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });
      }
    },
    []
  );

  const toggleMenu = useCallback(() => {
    setHasMenuInteraction(true);

    if (isMenuOpen) {
      closeMenu({
        restoreFocus: true
      });

      return;
    }

    openMenu();
  }, [closeMenu, isMenuOpen, openMenu]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.remove(
        "mobile-navigation-open"
      );

      return;
    }

    document.body.classList.add(
      "mobile-navigation-open"
    );

    const backgroundElements =
      document.querySelectorAll<HTMLElement>(
        "main, footer"
      );

    backgroundElements.forEach((element) => {
      element.inert = true;
    });

    const focusFrame = window.requestAnimationFrame(
      () => {
        headerRef.current
          ?.querySelector<HTMLElement>(
            "#primary-navigation a[href]"
          )
          ?.focus();
      }
    );

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu({
          restoreFocus: true
        });

        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        headerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        ) ?? []
      ).filter(
        (element) => element.getClientRects().length > 0
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement?.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.classList.remove(
        "mobile-navigation-open"
      );

      window.cancelAnimationFrame(focusFrame);

      backgroundElements.forEach((element) => {
        element.inert = false;
      });

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [closeMenu, isMenuOpen]);

  return {
    isMenuOpen,
    hasMenuInteraction,
    headerRef,
    menuButtonRef,
    openMenu,
    closeMenu,
    toggleMenu
  };
}
