"use client";

import { setBoards, useAppDispatch, useAppSelector } from "app/redux";
import { IBoard, ITask } from "interfaces/ITasks";
import { ReactNode, createContext, useContext, useState } from "react";

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
  const { boards: isBoards } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  // const [isBoards, setBoards] = useState(boards);
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
      // console.log(
      //   `Current board and task are defined. Board: ${JSON.stringify(
      //     isCurrentBoard
      //   )}, Task:${JSON.stringify(isCurrentTask)}`
      // );
      const currentIndex = isCurrentBoard?.tasks.indexOf(isCurrentTask);

      if (currentIndex !== undefined) {
        isCurrentBoard?.tasks.splice(currentIndex, 1);
      }

      const dropIndex = board.tasks.indexOf(task);

      board.tasks?.splice(dropIndex + 1, 0, isCurrentTask);

      const boardToSet = isBoards.map((b) => {
        if (b.id === board.id) return board;

        if (b.id === isCurrentBoard.id) return isCurrentBoard;

        return b;
      });

      dispatch(setBoards(boardToSet));
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
