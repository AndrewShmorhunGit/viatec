import { IBoard, ITask } from "./ITasks";

export interface IDrag {
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
