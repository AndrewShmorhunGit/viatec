"use client";
import { current } from "@reduxjs/toolkit";
import { useAppSelector } from "app/redux";
import { IBoard, ITask } from "interfaces/ITasks";
// import { useDrag } from "hooks/useTheme";

import { ReactNode, createContext, useContext, useState } from "react";
import { sortTasks } from "utils/functions";

interface IDrag {
  isBoards: IBoard[];
  dragStartHandler: (
    e: React.DragEvent<HTMLDivElement>,
    board: IBoard,
    task: ITask
  ) => void;
  dragEndHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dropHandler: (
    e: React.DragEvent<HTMLDivElement>,
    board: IBoard,
    task: ITask
  ) => void;
  dragOverHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dragLeaveHandler: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const DragContext = createContext<IDrag | null>(null);

export function DragContextProvider({ children }: { children: ReactNode }) {
  const { tasks } = useAppSelector((state) => state.tasks);

  const boards = sortTasks(tasks).map((tasks, index) => {
    return { id: index++, tasks };
  });

  const [isBoards, setBoards] = useState(boards);
  const [isCurrentBoard, setCurrentBoard] = useState<IBoard | null>(null);
  const [isCurrentTask, setCurrentTask] = useState<ITask | null>(null);

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    if (target.className) {
      if (target.className === "task")
        target.style.boxShadow = "0px 4px 3px grey";
    }
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    target.style.boxShadow = "none";
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    target.style.boxShadow = "none";
  }

  function dragStartHandler(
    _e: React.DragEvent<HTMLDivElement>,
    board: IBoard,
    task: ITask
  ) {
    setCurrentBoard(board);
    setCurrentTask(task);
  }

  function dropHandler(
    e: React.DragEvent<HTMLDivElement>,
    board: IBoard,
    task: ITask
  ) {
    e.preventDefault();

    if (isCurrentTask && isCurrentBoard) {
      const currentIndex = isCurrentBoard?.tasks.indexOf(isCurrentTask);

      if (currentIndex !== undefined) {
        isCurrentBoard?.tasks?.splice(currentIndex, 1);
      }

      const dropIndex = board.tasks.indexOf(task);

      board.tasks?.splice(dropIndex + 1, 0, isCurrentTask);

      const boardToSet = boards.map((b) => {
        if (b.id === board.id) return board;

        if (b.id === isCurrentBoard.id) return isCurrentBoard;

        return b;
      });

      setBoards(boardToSet);
    }
  }

  return (
    <DragContext.Provider
      value={{
        isBoards,
        dragStartHandler,
        dragEndHandler,
        dropHandler,
        dragOverHandler,
        dragLeaveHandler,
      }}
    >
      {children}
    </DragContext.Provider>
  );
}

export function useDragContext() {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error("useDragContext must be used within a DragContextProvider");
  }
  return context;
}
