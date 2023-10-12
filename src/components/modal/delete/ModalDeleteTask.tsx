"use client";
import { useAppSelector } from "app/redux";
import { getTaskById } from "utils/functions";
import { ModalCloseX } from "../buttons/ModalCloseX";
import { ModalCloseButton } from "../buttons/ModalCloseButton";
import { ModalDeleteButton } from "../buttons/ModalDeleteTaskButton";
import { ITask } from "interfaces/ITasks";

export function ModalDeleteTask() {
  // useTaskInModal hook
  const { value, data } = useAppSelector((state) => state.modal);
  const { tasks } = useAppSelector((store) => store.tasks);
  let task: ITask | null = null;
  if (data) {
    task = data ? getTaskById(data, tasks) : null;
  }

  if (value === "delete" && data && task) {
    return (
      <div className="modal-content gap-4">
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">{`Deleting ${task.title} task`}</h2>
          <ModalCloseX />
        </div>
        {/* Body */}
        <div className="modal-body">
          <p className="fs-4">{`Are you shure you want to delete ${task.title} task?`}</p>
        </div>
        {/* Footer */}
        <div className="modal-footer gap-4">
          <ModalCloseButton />
          <ModalDeleteButton id={task.id} />
        </div>
      </div>
    );
  }
}
