import { useState } from "react";
import { boards } from "../data/tasks";
import { IBoard, ITask } from "interfaces/ITasks";

export const useDrag = () => {
  const [isBoards, setBoards] = useState(boards);
  const [isCurrentBoard, setCurrentBoard] = useState<IBoard | null>(null);
  const [isCurrentTask, setCurrentTask] = useState<ITask | null>(null);

  const dragAndDropCondition = isCurrentBoard && isCurrentTask;

  function dragStartHandler(
    e: React.DragEvent<HTMLDivElement>,
    board: IBoard,
    task: ITask
  ) {
    const target = e.target as HTMLDivElement;
    if (target) {
      setCurrentBoard(board);
      setCurrentTask(task);
    }
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    if (dragAndDropCondition) target.style.boxShadow = "none";
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    if (dragAndDropCondition) target.style.boxShadow = "none";
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    if (target.id) {
      if (dragAndDropCondition) target.style.boxShadow = "0px 4px 3px grey";
    }
  }

  function dropScheduleHandler(
    e: React.DragEvent<HTMLDivElement>,
    board: IBoard
  ) {
    const target = e.target as HTMLDivElement;
    if (dragAndDropCondition) target.style.boxShadow = "none";

    if (isCurrentTask) {
      const modifiedDragStartBoards = isBoards.map((isBoard) => {
        if (isBoard === isCurrentBoard) {
          const boardTasks = isBoard.tasks.filter(
            (boardTask) => boardTask !== isCurrentTask && boardTask
          );
          return { ...isBoard, tasks: boardTasks };
        }
        return isBoard;
      });

      const modifiedTask: ITask = {
        ...isCurrentTask,
        time: { start: target.id, length: isCurrentTask.time.length },
      };

      const modifiedDragEndBoards = modifiedDragStartBoards.map((isBoard) => {
        if (isBoard === board) {
          const boardTasks = board.tasks;
          return { ...board, tasks: [...boardTasks, modifiedTask] };
        }
        return isBoard;
      });
      setCurrentBoard(null);
      setCurrentTask(null);
      setBoards(modifiedDragEndBoards);
    }
  }

  return {
    isBoards,
    isCurrentBoard,
    dragStartHandler,
    dragLeaveHandler,
    dragEndHandler,
    dragOverHandler,
    dropScheduleHandler,
  };
};
