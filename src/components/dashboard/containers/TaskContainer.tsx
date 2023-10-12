"use client";
import styles from "styles/modules/dashboard.module.scss";
import { useThemeContext } from "context/theme.context";
import { IBoard, ITask } from "interfaces/ITasks";
import { ReactNode } from "react";
import { selectTaskColor } from "utils/functions";
import { useDragContext } from "context/drag.context";
export function TaskContainer({
  board,
  task,
  children,
}: {
  board: IBoard;
  task: ITask;
  children: ReactNode;
}) {
  const { isMode } = useThemeContext();
  const {
    dragStartHandler,
    dragEndHandler,
    dropHandler,
    dragOverHandler,
    dragLeaveHandler,
  } = useDragContext();
  return (
    <div
      className={`p-4 ${isMode !== "dark" ? "bg-light" : "bg-task-dark"} ${
        styles.task_container
      }`}
      style={{
        borderLeft: `8px solid ${selectTaskColor(task.status)}`,
        padding: "1.6rem 1.6rem 2rem 2.4rem",
      }}
      draggable={true}
      onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
        dragStartHandler(e, board, task)
      }
      onDragEnd={(e: React.DragEvent<HTMLDivElement>) => dragEndHandler(e)}
      onDrop={(e: React.DragEvent<HTMLDivElement>) =>
        dropHandler(e, board, task)
      }
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => dragOverHandler(e)}
      onDragLeave={(e: React.DragEvent<HTMLDivElement>) => dragLeaveHandler(e)}
    >
      {children}
    </div>
  );
}
