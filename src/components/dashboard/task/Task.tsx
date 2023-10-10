import { ITask } from "interfaces/ITasks";

export function Task({ id, name, description, completed }: ITask) {
  return (
    <div>
      <strong>{name}</strong>
      <p>{description}</p>
      <div>{completed ? "task completed" : "todo task"}</div>
      <p>{id}</p>
    </div>
  );
}
