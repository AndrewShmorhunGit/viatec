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
  const theme = isMode !== "dark" ? "bg-white" : "bg-dark";
  return <div className={`rounded shadow ${theme} p-4`}>{children}</div>;
}
