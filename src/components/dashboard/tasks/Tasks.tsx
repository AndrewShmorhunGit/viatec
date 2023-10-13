import { TasksContainer } from "../containers/TasksContainer";
import { Task } from "../task/Task";
import { IBoard } from "interfaces/ITasks";

export function Tasks({ board }: { board: IBoard }) {
  return (
    <TasksContainer board={board}>
      {board.tasks.map((task) => (
        <Task key={task.id} task={task} board={board} />
      ))}
    </TasksContainer>
  );
}
