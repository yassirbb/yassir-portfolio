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

  const firstMenuLinkRef =
    useRef<HTMLAnchorElement>(null);

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

    firstMenuLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu({
          restoreFocus: true
        });
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

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [closeMenu, isMenuOpen]);

  return {
    isMenuOpen,
    hasMenuInteraction,
    menuButtonRef,
    firstMenuLinkRef,
    openMenu,
    closeMenu,
    toggleMenu
  };
}