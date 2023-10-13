"use client";
import { Board } from "../board/Board";
import { BoardsContainer } from "components/dashboard/containers/BoardsContainer";
import { useAppSelector } from "hooks/useAppDispatch";

export function Boards() {
  const { isBoards } = useAppSelector((state) => state.boards);

  return (
    <BoardsContainer>
      {isBoards.map((board, index) => {
        return <Board key={index} board={{ id: index, tasks: board.tasks }} />;
      })}
    </BoardsContainer>
  );
}
