export interface Task {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
}
