"use client";

import { setBoards, useAppDispatch, useAppSelector } from "app/redux";
import { IBoard, ITask } from "interfaces/ITasks";
import { ReactNode, createContext, useContext, useState } from "react";
import { setInitialStatus } from "utils/functions";

interface IDrag {
  isBoards: IBoard[];
  dragStartHandler: (
    e: React.DragEvent<HTMLDivElement>,
    board: IBoard,
    task: ITask
  ) => void;
  dragEndHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dropCardHandler: (e: React.DragEvent<HTMLDivElement>, board: IBoard) => void;
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
  const { isBoards } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [isCurrentBoard, setCurrentBoard] = useState<IBoard | null>(null);
  const [isCurrentTask, setCurrentTask] = useState<ITask | null>(null);

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    const isTaskContainer = target.role === "task-container";
    const isContainerChildren =
      target.role?.includes("task-") && !isTaskContainer;
    if (isTaskContainer) {
      target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
      target.style.transition = "all 0.3s ease-in-out";
    }

    if (isContainerChildren && target.parentElement) {
      target.parentElement.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    }
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    // boiler play code
    const target = e.target as HTMLDivElement;
    target.style.boxShadow = "none";
    if (target.parentElement) {
      target.parentElement.style.boxShadow = "none";
    }
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    target.style.boxShadow = "none";
    if (target.parentElement) {
      target.parentElement.style.boxShadow = "none";
    }
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
    const target = e.target as HTMLDivElement;
    target.style.boxShadow = "none";
    if (target.parentElement) {
      target.parentElement.style.boxShadow = "none";
    }

    if (!isCurrentBoard || !isCurrentTask) {
      return;
    }

    // Create new arrays with updated tasks
    const currentBoard = {
      ...isCurrentBoard,
      tasks: isCurrentBoard.tasks.filter((t) => t !== isCurrentTask),
    };

    if (isCurrentBoard.id === board.id) {
      const updatedDraggedBoard = {
        ...isCurrentBoard,
        tasks: isCurrentBoard.tasks.filter((t) => t !== isCurrentTask),
      };
    }

    const dropIndex = board.tasks.indexOf(task);

    // Insert the currentTask into the desired position in the board tasks
    const updatedBoardTasks = [
      ...board.tasks.slice(0, dropIndex + 1),
      { ...isCurrentTask, status: setInitialStatus(board.id) },
      ...board.tasks.slice(dropIndex + 1),
    ];

    // Create a new board object with the updated tasks
    const updatedBoard = {
      ...board,
      tasks: updatedBoardTasks,
    };

    // Update the boards array
    const boardsToSet = isBoards.map((b) => {
      if (b.id === board.id) {
        return updatedBoard;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    });

    dispatch(setBoards(boardsToSet));
  }

  // function dropCardHandler(e: React.DragEvent<HTMLDivElement>, board: IBoard) {
  //   if (!isCurrentBoard || !isCurrentTask) {
  //     return;
  //   }
  //   const currentBoard = { ...isCurrentBoard };
  //   const currentTask = { ...isCurrentTask };
  //   const currentIndex = currentBoard.tasks.indexOf(currentTask);

  //   const updatedTasks = currentBoard.tasks.filter(
  //     (_task, index) => index !== currentIndex
  //   );

  //   const updatedBoard = { ...currentBoard, tasks: updatedTasks };

  //   const boardToSet = isBoards.map((b) => {
  //     if (b.id === board.id) return board;
  //     if (b.id === updatedBoard.id) return updatedBoard;
  //     return b;
  //   });

  //   dispatch(setBoards(boardToSet));
  // }

  function dropCardHandler(e: React.DragEvent<HTMLDivElement>, board: IBoard) {
    e.preventDefault();
    if (!isCurrentBoard || !isCurrentTask) {
      return;
    }

    const currentBoard = {
      ...isCurrentBoard,
      tasks: isCurrentBoard.tasks.filter((t) => t !== isCurrentTask),
    };

    const dropIndex = board.tasks.indexOf(isCurrentTask);

    // Insert the currentTask into the desired position in the board tasks
    const updatedBoardTasks = [
      ...board.tasks.slice(0, dropIndex + 1),
      { ...isCurrentTask, status: setInitialStatus(board.id) },
      ...board.tasks.slice(dropIndex + 1),
    ];

    const updatedBoard = {
      ...board,
      tasks: updatedBoardTasks,
    };

    // Update the boards array
    const boardsToSet = isBoards.map((b) => {
      if (b.id === board.id) {
        return updatedBoard;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    });

    dispatch(setBoards(boardsToSet));
  }

  return (
    <DragContext.Provider
      value={{
        isBoards,
        dragStartHandler,
        dragEndHandler,
        dropHandler,
        dropCardHandler,
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
