"use client";

import { createContext, useContext, useEffect, useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
export type Preference = "light" | "dark" | "system";

const THEME_KEY = "mgd-theme";
const CYCLE: Preference[] = ["system", "dark", "light"];

// ─── External store snapshots ─────────────────────────────────────────────────

function getPreferenceSnapshot(): Preference {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return "system";
}

function getResolvedSnapshot(): Theme {
  const pref = getPreferenceSnapshot();
  if (pref !== "system") return pref;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Subscribe to both manual overrides (storage) and OS theme changes (matchMedia)
function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", callback);
  mq.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    mq.removeEventListener("change", callback);
  };
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface ThemeContextValue {
  /** Resolved theme used for rendering: always "light" or "dark". */
  theme: Theme;
  /** User's stored preference, including "system" (follow OS). */
  preference: Preference;
  /** Cycles: system → dark → light → system */
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  preference: "system",
  cycleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getResolvedSnapshot, () => "light" as Theme);
  const preference = useSyncExternalStore(subscribe, getPreferenceSnapshot, () => "system" as Preference);

  // Sync the "dark" class on <html> with the resolved theme
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const cycleTheme = useCallback(() => {
    const current = getPreferenceSnapshot();
    const next = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length];
    if (next === "system") {
      localStorage.removeItem(THEME_KEY);
    } else {
      localStorage.setItem(THEME_KEY, next);
    }
    // Notify both useSyncExternalStore subscriptions
    window.dispatchEvent(new StorageEvent("storage", { key: THEME_KEY }));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, preference, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
