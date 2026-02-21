"use client";

import { useTheme } from "@/context/ThemeContext";
import type { Preference } from "@/context/ThemeContext";

const ICON: Record<Preference, string> = {
  system: "🖥️",
  light: "☀️",
  dark: "🌙",
};

// Describes what clicking will do next
const NEXT_LABEL: Record<Preference, string> = {
  system: "Switch to dark mode",
  dark: "Switch to light mode",
  light: "Reset to system theme",
};

export default function DarkModeToggle() {
  const { preference, cycleTheme } = useTheme();

  return null;
  return (
    <button
      onClick={cycleTheme}
      aria-label={NEXT_LABEL[preference]}
      title={NEXT_LABEL[preference]}
      className="w-9 h-9 rounded-full flex items-center justify-center text-lg transition-colors duration-200 hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan shrink-0"
    >
      {ICON[preference]}
    </button>
  );
}
