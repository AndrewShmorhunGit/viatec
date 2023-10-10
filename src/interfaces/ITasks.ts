export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface ITasksState {
  tasks: ITask[];
}
