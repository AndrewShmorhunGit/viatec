import { ITask } from "interfaces/ITasks";
import { Tasks } from "../tasks/Tasks";
import { BoardContainer } from "components/containers/BoardContainer";
import { AddTaskButton } from "../buttons/AddTaskButton";
export function Board({ board }: { board: ITask[] }) {
  return (
    <BoardContainer>
      <Tasks tasks={board} />
      <AddTaskButton props={undefined} />
    </BoardContainer>
  );
}
