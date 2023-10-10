import { ITask } from "interfaces/ITasks";
import { DeleteTaskButton } from "../buttons/DeleteTaskButton";
import { EditTaskButton } from "../buttons/EditTaskButton";
import { TaskContainer } from "components/containers/TaskContainer";

export function Task({ id, name, description, completed }: ITask) {
  return (
    <TaskContainer>
      <h4>{name}</h4>
      <p>{description}</p>
      {/* <div>{completed ? "task completed" : "todo task"}</div> */}
      <DeleteTaskButton />
      <EditTaskButton />
    </TaskContainer>
  );
}
