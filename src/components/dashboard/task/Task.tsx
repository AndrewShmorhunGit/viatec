import { IBoard, ITask } from "interfaces/ITasks";
import { DeleteTaskButton } from "../buttons/DeleteTaskButton";
import { EditTaskButton } from "../buttons/EditTaskButton";
import { TaskContainer } from "components/dashboard/containers/TaskContainer";
import { Title } from "./Title";

export function Task({ board, task }: { board: IBoard; task: ITask }) {
  return (
    <TaskContainer task={task} board={board}>
      <>
        <Title title={task.title} />
        <p style={{ fontSize: "1.6rem" }}>{task.description}</p>
        <DeleteTaskButton taskId={task.id} />
        <EditTaskButton taskId={task.id} />
      </>
    </TaskContainer>
  );
}
