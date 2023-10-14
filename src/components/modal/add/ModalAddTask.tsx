"use client";
import { TaskStatusEnum } from "interfaces/ITasks";
import { ModalInputs } from "../edit/ModalInputs";
import { v4 as uuidv4 } from "uuid";
import { ModalFooter } from "../content/ModalFooter";
import { useModalTaskForm } from "hooks/useModalTaskForm";
import { ModalHeader } from "../content/ModalHeader";
import { ModalFormSubmitButton } from "../buttons/ModalFormSubmitButton";

export function ModalAddTask({ value, data }: { value: string; data: string }) {
  const isValid = value === "add";

  const initialTask = {
    id: uuidv4(),
    description: "",
    title: "",
    status: data as TaskStatusEnum,
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
        <ModalHeader title={"Add New Task"} />
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
