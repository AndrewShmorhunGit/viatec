import { IBoard, ITask } from "interfaces/ITasks";
import { DeleteTaskButton } from "../buttons/DeleteTaskButton";
import { EditTaskButton } from "../buttons/EditTaskButton";
import { TaskContainer } from "components/dashboard/containers/TaskContainer";
import { Title } from "./Title";

export function Task({ board, task }: { board: IBoard; task: ITask }) {
  return (
    <TaskContainer status={status}>
      <Title title={title} />
      <p className="fs-5" style={{ paddingRight: "4rem" }}>
        {description}
      </p>
      <EditTaskButton taskId={id} />
      <DeleteTaskButton taskId={id} />
    </TaskContainer>
  );
}
