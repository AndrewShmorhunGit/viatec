import { ITask, TaskStatusEnum } from "interfaces/ITasks";

export const sortTasks = (tasks: ITask[]): ITask[][] => {
  return tasks.reduce(
    (boards, task) => {
      switch (task.status) {
        case TaskStatusEnum.TO_DO:
          boards[0].push(task);
          break;
        case TaskStatusEnum.IN_PROGRESS:
          boards[1].push(task);
          break;
        case TaskStatusEnum.DONE:
          boards[2].push(task);
          break;
        default:
          break;
      }
      return boards;
    },
    [[], [], []] as ITask[][]
  );
};

export const getTaskById = (
  id: string | null,
  tasks: ITask[]
): ITask | null => {
  const task = tasks.find((task) => task.id === id);
  if (task === undefined || id === "nill") {
    return null;
  }
  return task;
};

export const selectTaskColor = (status: TaskStatusEnum): string =>
  status === TaskStatusEnum.TO_DO
    ? "#a9e34b"
    : status === TaskStatusEnum.IN_PROGRESS
    ? "#ffd43b"
    : "#5795a7";
