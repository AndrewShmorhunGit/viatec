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
    removeBoxShadow(target);

    if (!isCurrentBoard || !isCurrentTask) {
      return;
    }

    // Create a copy of the current task with updated status
    const updatedTask: ITask = {
      ...isCurrentTask,
      status: setInitialStatus(board.id),
    };

    // Remove the current task from the current board
    const currentBoard = {
      ...isCurrentBoard,
      tasks: isCurrentBoard.tasks.filter((t) => t !== isCurrentTask),
    };

    // Find the index where the task should be dropped in the target board
    const dropIndex = board.tasks.indexOf(task);

    // Create the updated array of tasks for the target board
    const updatedBoardTasks = [
      ...board.tasks.slice(0, dropIndex + 1),
      updatedTask,
      ...board.tasks.slice(dropIndex + 1),
    ];

    // Create the updated board with the new tasks
    const updatedBoard: IBoard = { ...board, tasks: updatedBoardTasks };

    // Update the list of boards
    const boardsToSet = isBoards.map((b) => {
      if (b.id === board.id) {
        return updatedBoard;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    });

    // Set new redux boards state
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
