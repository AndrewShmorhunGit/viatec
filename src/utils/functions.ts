import { IBoard, ITask, TaskStatusEnum } from "interfaces/ITasks";

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

export const getTaskById = (id: string | null, tasks: ITask[]): ITask => {
  const task = tasks.find((task) => task.id === id);

  if (task === undefined) {
    throw new Error(
      "Selected task is undefined. There is no such task id in the tasks list!"
    );
  }
  return task;
};

export const selectTaskColor = (status: TaskStatusEnum): string =>
  status === TaskStatusEnum.TO_DO
    ? "#a9e34b"
    : status === TaskStatusEnum.IN_PROGRESS
    ? "#ffd43b"
    : "#5795a7";

export const createTitle = (index: number): string => {
  if (index === 0) return "to do";
  if (index === 1) return "in progress";
  return "done";
};

export const setInitialStatus = (index: number): TaskStatusEnum =>
  index === 0
    ? TaskStatusEnum.TO_DO
    : index === 1
    ? TaskStatusEnum.IN_PROGRESS
    : TaskStatusEnum.DONE;

export const getBoardByStatus = (status: TaskStatusEnum): number =>
  status === TaskStatusEnum.TO_DO
    ? 0
    : status === TaskStatusEnum.IN_PROGRESS
    ? 1
    : 2;

export const getBoardsFromTasks = (tasks: ITask[]): IBoard[] => {
  return sortTasks(tasks).map((tasks, index) => {
    return { id: index, tasks };
  });
};

export const getTasksFromBoards = (boards: IBoard[]): ITask[] => {
  let tasks: ITask[] = [];
  boards.forEach((board) => tasks.push(...board.tasks));
  return tasks;
};

export function removeBoxShadow(target: HTMLDivElement | null) {
  if (target) {
    target.style.boxShadow = "none";
    const parentElement = target.parentElement as HTMLDivElement;
    if (parentElement) {
      parentElement.style.boxShadow = "none";
    }
  }
}

export function applyBoxShadow(target: HTMLDivElement) {
  const isTaskContainer = target.getAttribute("role") === "task-container";
  const isContainerChildren =
    target.getAttribute("role")?.includes("task-") && !isTaskContainer;

  if (isTaskContainer) {
    target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    target.style.transition = "box-shadow 0.3s ease-in-out";
  }

  if (isContainerChildren && target.parentElement) {
    target.parentElement.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  }
}
