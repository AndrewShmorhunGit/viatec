import { ITask, TaskStatusEnum } from "interfaces/ITasks";

export const sortTasks = (tasks: ITask[]): ITask[][] => {
  const toDoTasks = tasks.filter(
    (task) => task.status === TaskStatusEnum.TO_DO
  );
  const inProgressTasks = tasks.filter(
    (task) => task.status === TaskStatusEnum.IN_PROGRESS
  );
  const doneTasks = tasks.filter((task) => task.status === TaskStatusEnum.DONE);
  const boards = [toDoTasks, inProgressTasks, doneTasks];
  return boards;
};
