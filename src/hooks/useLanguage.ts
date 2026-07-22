"use client";

import { useSyncExternalStore } from "react";

export type Language = "en" | "fr";

const STORAGE_KEY = "portfolio-language";
const CHANGE_EVENT = "portfolio-language-change";

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "fr";
}

function getSnapshot(): Language {
  const value = localStorage.getItem(STORAGE_KEY);

  return isLanguage(value) ? value : "en";
}

function subscribe(callback: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === STORAGE_KEY) {
      callback();
    }
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function saveLanguage(language: Language) {
  localStorage.setItem(STORAGE_KEY, language);

  document.cookie = [
    `${STORAGE_KEY}=${language}`,
    "path=/",
    "max-age=31536000",
    "samesite=lax"
  ].join("; ");

  document.documentElement.lang = language;

  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useLanguage(
  initialLanguage: Language
) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => initialLanguage
  );

  return {
    language,
    setLanguage: saveLanguage
  };
}