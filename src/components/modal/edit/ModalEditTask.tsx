"use client";
import {
  setModal,
  updateTask,
  useAppDispatch,
  useAppSelector,
} from "app/redux";
import { ModalCloseX } from "../buttons/ModalCloseX";
import { ModalCloseButton } from "../buttons/ModalCloseButton";
import { ITask, TaskStatusEnum } from "interfaces/ITasks";
import { getTaskById } from "utils/functions";
import { ModalEditButton } from "../buttons/ModalEditButton";
import { ModalEditForm } from "./ModalEditBody";
import { ChangeEvent, useState } from "react";

export function ModalEditTask() {
  // special hook
  const { value, data } = useAppSelector((state) => state.modal);
  const { tasks } = useAppSelector((store) => store.tasks);
  let task: ITask | null = null;
  if (data) {
    task = data ? getTaskById(data, tasks) : null;
  }

  if (value === "edit" && data && task) {
    const dispatch = useAppDispatch();
    const [isTitle, setTitle] = useState(task.title);
    const [isDescription, setDescription] = useState(task.description);
    const [isStatus, setStatus] = useState<TaskStatusEnum>(task.status);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    };

    const handleDescriptionChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const target = event.target;
      setDescription(`${target.value}`);
    };

    const handleStatusChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setStatus(event.target.value as TaskStatusEnum);
    };

    const handleSubmit = () => {
      task &&
        dispatch(
          updateTask({
            id: task.id,
            description: isDescription,
            title: isTitle,
            status: isStatus,
          })
        );
      dispatch(setModal({ value: "none", data: null }));
    };

    const invalidDescription = isDescription.length === 0;
    const invalidTitle = isTitle.length === 0;

    return (
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="modal-header" style={{ paddingBottom: "2rem" }}>
          <h2 className="modal-title">{`Editing "${task.title}" Task`}</h2>
          <ModalCloseX />
        </div>
        <div className="modal-body">
          <p
            style={{
              fontSize: "1.6rem",
              textTransform: "capitalize",
              paddingBottom: "2rem",
            }}
          >{`Fill the form`}</p>
          <ModalEditForm
            invalidTitle={invalidTitle}
            invalidDescription={invalidDescription}
            isTitle={isTitle}
            isDescription={isDescription}
            isStatus={isStatus}
            handleTitleChange={handleTitleChange}
            handleDescriptionChange={handleDescriptionChange}
            handleStatusChange={handleStatusChange}
          />
        </div>
        <div className="modal-footer" style={{ gap: "2rem" }}>
          <ModalCloseButton />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ background: "#5795a7", fontSize: "1.6rem" }}
          >
            Edit
          </button>
        </div>
      </form>
    );
  }
}
