"use client";

import { Board } from "../board/Board";
import { BoardsContainer } from "components/dashboard/containers/BoardsContainer";
import { sortTasks } from "utils/functions";
import { useAppSelector } from "app/redux";
import { Modal } from "components/modal/Modal";

export function Boards() {
  const { tasks } = useAppSelector((state) => state.tasks);
  const { value, data } = useAppSelector((state) => state.modal);
  return (
    <BoardsContainer>
      {value !== "none" && <Modal />}
      {sortTasks(tasks).map((board, index) => {
        return <Board key={index} board={board} index={index} />;
      })}
    </BoardsContainer>
  );
}
