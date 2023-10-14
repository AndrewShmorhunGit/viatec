"use client";
import { useThemeContext } from "context/theme.context";
import { palette } from "styles/palette";

export function Title({ title }: { title: string }) {
  const { isMode } = useThemeContext();
  return (
    <h3
      role="task-title"
      style={{
        color: isMode === "dark" ? "lightgrey" : palette.main,
        letterSpacing: ".1rem",
      }}
    >
      {title}
    </h3>
  );
}
