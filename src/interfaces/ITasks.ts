export enum TaskStatusEnum {
  TO_DO = "TO_DO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatusEnum;
}

export interface ITasksState {
  tasks: ITask[];
}
