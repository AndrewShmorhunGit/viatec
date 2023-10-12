"use client";

import { Board } from "../board/Board";
import { BoardsContainer } from "components/dashboard/containers/BoardsContainer";
import { useDragContext } from "context/drag.context";

export function Boards() {
  const { isBoards } = useDragContext();

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
