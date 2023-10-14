import { addTask, setModal, updateTask } from "app/redux";
import { ITask, TaskStatusEnum } from "interfaces/ITasks";
import { useState, FormEvent } from "react";
import { useAppDispatch } from "./useAppDispatch";

export const useModalTaskForm = (task: ITask) => {
  const { id, title, description, status } = task;
  const isAddContext = title === "" && description === "";
  const dispatch = useAppDispatch();
  const [isTitle, setTitle] = useState(title);
  const [isDescription, setDescription] = useState(description);
  const [isStatus, setStatus] = useState<TaskStatusEnum>(status);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = event.target;
    setDescription(`${target.value}`);
  };
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value as TaskStatusEnum);
  };

  const invalidDescription = isDescription.length === 0;
  const invalidTitle = isTitle.length === 0;

  const editedTaskToSubmit = {
    id,
    description: isDescription,
    title: isTitle,
    status: isStatus,
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      isAddContext
        ? addTask(editedTaskToSubmit)
        : updateTask(editedTaskToSubmit)
    );
    dispatch(setModal({ value: "none", data: null }));
  };

  return {
    invalidTitle,
    invalidDescription,
    isTitle,
    isDescription,
    isStatus,
    handleTitleChange,
    handleDescriptionChange,
    handleStatusChange,
    handleSubmit,
  };
};
