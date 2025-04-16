import { useEffect, useLayoutEffect, useState } from "react";

export default function useDarkMode(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark"
    );
  });

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

   // Vérifier le système de préférences après le premier rendu
   useEffect(() => {
    if (!localStorage.getItem("theme")) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
  }, []);

  return [isDark, setIsDark];
}