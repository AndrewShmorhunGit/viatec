"use client";
import { useThemeContext } from "context/theme.context";
import { ReactNode } from "react";

export function BoardContainer({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  const { isMode } = useThemeContext();

  return (
    <div
      style={{
        background: isMode !== "dark" ? "white" : "#323232",
        borderRadius: "1.2rem",
        boxShadow: "1px 2px 3px lightgrey",
        height: "auto",
        padding: "2rem",
      }}
    >
      {children}
    </div>
  );
}
