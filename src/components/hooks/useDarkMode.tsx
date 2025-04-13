import { useEffect, useState } from "react";

export default function useDarkMode(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDark) {
      if (!htmlElement.classList.contains("dark")) {
        htmlElement.classList.add("dark");
      }
      localStorage.setItem("theme", "dark");
    } else {
      if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
      }
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return [isDark, setIsDark];
}
