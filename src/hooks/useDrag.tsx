import { setBoards, useAppDispatch, useAppSelector } from "app/redux";
import { IBoard, ITask } from "interfaces/ITasks";
import { useState } from "react";
import {
  applyBoxShadow,
  removeBoxShadow,
  setInitialStatus,
} from "utils/functions";

export const useDrag = () => {
  const { isBoards } = useAppSelector((state) => state.boards);
  const dispatch = useAppDispatch();
  const [isCurrentBoard, setCurrentBoard] = useState<IBoard | null>(null);
  const [isCurrentTask, setCurrentTask] = useState<ITask | null>(null);

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    applyBoxShadow(target);
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    removeBoxShadow(target);
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    removeBoxShadow(target);
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
      if (board.id === b.id && currentBoard.id === b.id) {
        return {
          ...updatedBoard,
          tasks: updatedBoard.tasks.filter((t) => t !== isCurrentTask),
        };
      }
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

    const updatedBoardTasks = [
      ...board.tasks.slice(0, dropIndex + 1),
      { ...isCurrentTask, status: setInitialStatus(board.id) },
      ...board.tasks.slice(dropIndex + 1),
    ];

    const updatedBoard = {
      ...board,
      tasks: updatedBoardTasks,
    };

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

  return {
    isBoards,
    dragStartHandler,
    dragEndHandler,
    dropHandler,
    dropCardHandler,
    dragOverHandler,
    dragLeaveHandler,
  };
};
