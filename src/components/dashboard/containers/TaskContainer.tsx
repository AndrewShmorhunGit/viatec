"use client";
import { useDragContext } from "context/drag.context";
import { useThemeContext } from "context/theme.context";
import { IBoard, ITask } from "interfaces/ITasks";
import { ReactNode } from "react";
import { selectTaskColor } from "utils/functions";
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
      className="task"
      style={{
        background: isMode !== "dark" ? "#f6f7fc" : " #494949 ",
        borderRadius: "0.8rem",
        cursor: "grab",
        border: "1px solid lightgray",
        borderLeft: `8px solid ${selectTaskColor(task.status)}`,
        padding: "1.6rem 1.6rem 2rem 2.4rem",
        position: "relative",
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
