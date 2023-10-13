"use client";
import { ModalDeleteTask } from "../delete/ModalDeleteTask";
import { ModalEditTask } from "../edit/ModalEditTask";

import { ModalContentContainer } from "../containers/ModalContentContainer";
import { useAppSelector } from "app/redux";

export function ModalContent() {
  const {
    modal: { value, data },
    boards: { isBoards },
  } = useAppSelector((state) => ({
    modal: state.modal,
    boards: state.boards,
  }));

  if (value !== "none" && data) {
    return (
      <ModalContentContainer>
        <ModalDeleteTask value={value} data={data} boards={isBoards} />
        <ModalEditTask value={value} data={data} boards={isBoards} />
      </ModalContentContainer>
    );
  }
}
