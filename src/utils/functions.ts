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
