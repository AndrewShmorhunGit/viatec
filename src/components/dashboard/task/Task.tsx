import { IBoard, ITask } from "interfaces/ITasks";
import { DeleteTaskButton } from "../buttons/DeleteTaskButton";
import { EditTaskButton } from "../buttons/EditTaskButton";
import { TaskContainer } from "components/dashboard/containers/TaskContainer";
import { Title } from "./Title";
import { Description } from "./Description";

export function Task({ board, task }: { board: IBoard; task: ITask }) {
  const { title, description, id } = task;
  return (
    <TaskContainer board={board} task={task}>
      <Title title={title} />
      <Description text={description} />
      <EditTaskButton taskId={id} />
      <DeleteTaskButton taskId={id} />
    </TaskContainer>
  );
}
