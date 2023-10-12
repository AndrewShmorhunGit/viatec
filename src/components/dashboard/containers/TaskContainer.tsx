"use client";
import styles from "styles/modules/dashboard.module.scss";
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
      className={`p-4 ${isMode !== "dark" ? "bg-light" : "bg-task-dark"} ${
        styles.task_container
      }`}
      style={{
        borderLeft: `8px solid ${selectTaskColor(status)}`,
        padding: "1.6rem 1.6rem 2rem 2.4rem",
      }}
    >
      {children}
    </div>
  );
}
