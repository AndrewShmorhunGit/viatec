"use client";
import { useThemeContext } from "context/theme.context";
import { TaskStatusEnum } from "interfaces/ITasks";
import { ReactNode } from "react";
import { selectTaskColor } from "utils/functions";
export function TaskContainer({
  status,
  children,
}: {
  status: TaskStatusEnum;
  children: ReactNode;
}) {
  const { isMode } = useThemeContext();

  return (
    <div
      style={{
        background: isMode !== "dark" ? "#f6f7fc" : " #494949 ",
        borderRadius: "0.8rem",
        cursor: "grab",
        border: "1px solid lightgray",
        borderLeft: `8px solid ${selectTaskColor(status)}`,
        padding: "1.6rem 1.6rem 2rem 2.4rem",
        // paddingLeft: "1rem",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
