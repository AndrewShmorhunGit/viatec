"use client";
import { IBoard } from "interfaces/ITasks";
import { getTaskById, getTasksFromBoards } from "utils/functions";
import { ModalInputs } from "./ModalInputs";
import { ModalFooter } from "../content/ModalFooter";
import { useModalTaskForm } from "hooks/useModalTaskForm";
import { ModalHeader } from "../content/ModalHeader";
import { ModalFormSubmitButton } from "../buttons/ModalFormSubmitButton";

export function ModalEditTask({
  value,
  data,
  boards,
}: {
  value: string;
  data: string;
  boards: IBoard[];
}) {
  const isValid = value === "edit";
  const tasks = getTasksFromBoards(boards);
  const { id, title, description, status } = getTaskById(data as string, tasks);

  const initialTask = {
    id,
    description,
    title,
    status,
  };

  const {
    invalidTitle,
    invalidDescription,
    isTitle,
    isDescription,
    isStatus,
    handleTitleChange,
    handleDescriptionChange,
    handleStatusChange,
    handleSubmit,
  } = useModalTaskForm(initialTask);

  if (isValid) {
    return (
      <form className="modal-content gap-4" onSubmit={handleSubmit}>
        <ModalHeader title={`Editing Task "${title}"`} />
        <ModalInputs
          invalidTitle={invalidTitle}
          invalidDescription={invalidDescription}
          isTitle={isTitle}
          isDescription={isDescription}
          isStatus={isStatus}
          handleTitleChange={handleTitleChange}
          handleDescriptionChange={handleDescriptionChange}
          handleStatusChange={handleStatusChange}
        />
        <ModalFooter>
          <ModalFormSubmitButton value={value} />
        </ModalFooter>
      </form>
    );
  }
}
