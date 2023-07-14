import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

//* ICONS *//
import { BsSun, BsMoon } from "react-icons/bs";

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<any>();

  useEffect(() => {
    setCurrentTheme(() => (theme === "system" ? systemTheme : theme));
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-track-color",
      theme === "dark" ? "#04030c" : "#f1f5f9"
    );
  }, [theme]);

  return (
    <button
      onClick={() =>
        currentTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
      className="p-2 dark:border-slate-200 border-slate-800 border rounded-md"
    >
      {currentTheme == "dark" ? (
        <BsSun className="text-xl text-slate-200" />
      ) : (
        <BsMoon className="w-5 h-5 text-slate-800" />
      )}
    </button>
  );
};
