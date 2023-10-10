import { useEffect } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

export const useTheme = () => {
  const { state: isMode, setState: setMode } = useLocalStorageState<string>(
    "mode",
    "light"
  );

  useEffect(() => {
    if (isMode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    isMode === "light" ? setMode("dark") : setMode("light");
    document.documentElement.classList.toggle("dark");
    console.log(isMode);
  };

  const checkTheme = isMode === "light" ? false : true;
  const isLightTheme = isMode === "light";
  const style = { position: "absolute", top: "1rem" };

  return { isMode, setMode, toggleTheme, checkTheme, isLightTheme, style };
};
