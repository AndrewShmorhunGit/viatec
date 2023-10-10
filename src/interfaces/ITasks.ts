export interface ITask {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

export interface ITasksState {
  tasks: ITask[];
}
