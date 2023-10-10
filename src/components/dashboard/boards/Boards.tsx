import { boards, tasks } from "data/static";
import { Board } from "../board/Board";
import { BoardsContainer } from "components/containers/BoardsContainer";

export function Boards() {
  const [toDoTasks, inProgressTasks, doneTasks] = boards;
  return (
    <BoardsContainer>
      {boards.map((board, index) => {
        return <Board key={index} board={board} />;
      })}
    </BoardsContainer>
  );
}
