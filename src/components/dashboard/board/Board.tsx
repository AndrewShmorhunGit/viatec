import { IBoard } from "interfaces/ITasks";
import { Tasks } from "../tasks/Tasks";
import { BoardContainer } from "components/dashboard/containers/BoardContainer";
import { AddTaskButton } from "../buttons/AddTaskButton";
import { BoardTitle } from "./BoardTitle";

export function Board({ board }: { board: IBoard }) {
  return (
    <BoardContainer index={board.id}>
      <BoardTitle index={board.id} />
      <Tasks board={board} />
      <AddTaskButton index={board.id} />
    </BoardContainer>
  );
}
