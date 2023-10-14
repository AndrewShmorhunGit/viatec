"use client";
import { ModalDeleteTask } from "../delete/ModalDeleteTask";
import { ModalEditTask } from "../edit/ModalEditTask";
import { ContentFunctionalContainer } from "../containers/ContentFunctionalContainer";
import { useAppSelector } from "app/redux";
import { ModalAddTask } from "../add/ModalAddTask";

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
      <ContentFunctionalContainer>
        {value === "add" && <ModalAddTask value={value} data={data} />}
        {value === "delete" && (
          <ModalDeleteTask value={value} data={data} boards={isBoards} />
        )}
        {value === "edit" && (
          <ModalEditTask value={value} data={data} boards={isBoards} />
        )}
      </ContentFunctionalContainer>
    );
  }
}
