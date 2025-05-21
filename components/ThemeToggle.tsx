"use client";

import { useTheme } from "next-themes";
import { PiMoonLight, PiSunLight } from "react-icons/pi";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-2xl transition-colors duration-300 cursor-pointer"
    >
      {theme === "dark" ? <PiSunLight /> : <PiMoonLight />}
    </button>
  );
};