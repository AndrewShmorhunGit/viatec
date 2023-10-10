import { tasks } from "data/static";
import { Board } from "../board/Board";
import { BoardsContainer } from "components/containers/BoardsContainer";
import { sortTasks } from "utils/functions";

export function Boards() {
  return (
    <BoardsContainer>
      {sortTasks(tasks).map((board, index) => {
        return <Board key={index} board={board} index={index} />;
      })}
    </BoardsContainer>
  );
}
