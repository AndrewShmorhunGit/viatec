"use client";

import { useDragContext } from "context/drag.context";
import { useThemeContext } from "context/theme.context";
import { IBoard } from "interfaces/ITasks";

export function EmptyTasks({ board }: { board: IBoard }) {
  const { isMode } = useThemeContext();
  const { dragOverHandler, dropCardHandler } = useDragContext();
  return (
    <div
      className="d-flex align-items-center justify-content-center fs-1 pointer"
      style={{
        border: "1px solid lightgray",
        minHeight: "50rem",
        borderRadius: "1.2rem",
        opacity: 0.6,
        background: isMode === "dark" ? "#343a40 " : "#f8f9fa",
      }}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => dragOverHandler(e)}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => dropCardHandler(e, board)}
    >
      <p style={{ fontSize: "2.8rem" }}>Add or Darg</p>
    </div>
  );
}
