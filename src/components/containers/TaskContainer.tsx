"use client";
import { useThemeContext } from "context/theme.context";
import { ReactNode } from "react";
export function TaskContainer({ children }: { children: ReactNode }) {
  const { isMode } = useThemeContext();
  return (
    <div
      style={{
        background: isMode !== "dark" ? "#f6f7fc" : " #494949 ",
        borderRadius: "0.8rem",
        cursor: "grab",
        border: "1px solid lightgray",
        padding: "1.6rem",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
