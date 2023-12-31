export interface IBoard {
  id: number;
  tasks: ITask[];
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatusEnum;
}

export enum TaskStatusEnum {
  TO_DO = "TO_DO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface ITasksState {
  isBoards: IBoard[];
}

export interface ITaskForm {
  invalidTitle: boolean;
  invalidDescription: boolean;
  isTitle: string;
  isDescription: string;
  isStatus: TaskStatusEnum;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleStatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
