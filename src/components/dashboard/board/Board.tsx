import { ITask } from "interfaces/ITasks";
import { Tasks } from "../tasks/Tasks";
import { BoardContainer } from "components/containers/BoardContainer";
import { AddTaskButton } from "../buttons/AddTaskButton";
import { BoardTitle } from "./BoardTitle";
import { TaskContainer } from "components/containers/TaskContainer";
export function Board({ board, index }: { board: ITask[]; index: number }) {
  return (
    <BoardContainer>
      <BoardTitle index={index} />
      <Tasks tasks={board} />
      <AddTaskButton />
    </BoardContainer>
  );
}