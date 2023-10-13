"use client";

import { Board } from "../board/Board";
import { BoardsContainer } from "components/dashboard/containers/BoardsContainer";
import { useDragContext } from "context/drag.context";
import { useAppSelector } from "hooks/useAppDispatch";

export function Boards() {
  const { isBoards } = useAppSelector((state) => state.tasks);
  // console.log(isBoards);

  return (
    <BoardsContainer>
      {isBoards.map((board, index) => {
        return (
          <Board key={index} board={{ id: index++, tasks: board.tasks }} />
        );
      })}
    </BoardsContainer>
  );
}
