import { ITask } from "interfaces/ITasks";
import { DeleteTaskButton } from "../buttons/DeleteTaskButton";
import { EditTaskButton } from "../buttons/EditTaskButton";
import { TaskContainer } from "components/containers/TaskContainer";
import { Title } from "./Title";

export function Task({ id, title, description, completed }: ITask) {
  return (
    <TaskContainer>
      <Title title={title} />
      <p style={{ fontSize: "1.6rem" }}>{description}</p>
      {/* <div>{completed ? "task completed" : "todo task"}</div> */}
      <DeleteTaskButton />
      <EditTaskButton />
    </TaskContainer>
  );
}
