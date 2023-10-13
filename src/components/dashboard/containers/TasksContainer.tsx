import { IBoard } from "interfaces/ITasks";
import { ReactNode } from "react";
import { EmptyTasks } from "../tasks/EmptyTasks";
// import { useDragContext } from "context/drag.context";

export function TasksContainer({
  board,
  children,
}: {
  board: IBoard;
  children: ReactNode;
}) {
  return (
    <div
      className="d-flex flex-column gap-3 scroll-bar py-1 px-2"
      style={{
        overflowY: "auto",
        maxHeight: "calc(100vh - 37.2rem)",
        minHeight: "10rem",
      }}
    >
      {board.tasks.length ? children : <EmptyTasks board={board} />}
    </div>
  );
}
