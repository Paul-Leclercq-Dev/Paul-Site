import { useLayoutEffect, useRef, useState } from "react";

export default function useDarkMode(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  // État initial : préférence stockée, sinon préférence système (aligné sur le script inline d'index.html)
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      return stored === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Ignore le premier rendu pour ne pas persister un choix qui n'a pas été fait explicitement
  const isFirstRun = useRef(true);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return [isDark, setIsDark];
}