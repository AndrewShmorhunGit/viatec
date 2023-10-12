"use client";
import { ModalDeleteTask } from "../delete/ModalDeleteTask";
import { ModalEditTask } from "../edit/ModalEditTask";

import { ModalContentContainer } from "../containers/ModalContentContainer";
import { useAppSelector } from "app/redux";

export function ModalContent() {
  const { value, data } = useAppSelector((state) => state.modal);
  if (value !== "none" && data) {
    return (
      <ModalContentContainer>
        <ModalDeleteTask />
        <ModalEditTask />
      </ModalContentContainer>
    );
  }
}
