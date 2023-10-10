"use client";
import { useThemeContext } from "context/theme.context";

export function Title({ title }: { title: string }) {
  const { isMode } = useThemeContext();
  return (
    <h3
      style={{
        color: isMode === "dark" ? "lightgrey" : "#5795a7",
        letterSpacing: ".1rem",
      }}
    >
      {title}
    </h3>
  );
}
