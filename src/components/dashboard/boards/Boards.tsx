"use client";

import { Board } from "../board/Board";
import { BoardsContainer } from "components/containers/BoardsContainer";
import { sortTasks } from "utils/functions";
import { useAppSelector } from "app/redux";

export function Boards() {
  const { tasks } = useAppSelector((state) => state.tasks);
  return (
    <BoardsContainer>
      {sortTasks(tasks).map((board, index) => {
        return <Board key={index} board={board} index={index} />;
      })}
    </BoardsContainer>
  );
}
