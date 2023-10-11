"use client";
import { useAppSelector } from "app/redux";
import { getTaskById } from "utils/functions";
import { ModalCloseX } from "../buttons/ModalCloseX";
import { ModalCloseButton } from "../buttons/ModalCloseButton";
import { ModalDeleteButton } from "../buttons/ModalDeleteTaskButton";
import { ITask } from "interfaces/ITasks";

export function ModalDeleteTask() {
  const { value, data } = useAppSelector((state) => state.modal);
  const { tasks } = useAppSelector((store) => store.tasks);
  let task: ITask | null = null;
  if (data) {
    task = data ? getTaskById(data, tasks) : null;
  }

  if (value === "delete" && data && task) {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{`Deleting ${task.title} task`}</h2>
          <ModalCloseX />
        </div>
        <div className="modal-body">
          <p
            style={{ fontSize: "1.6rem" }}
          >{`Are you shure you want to delete ${task.title} task?`}</p>
        </div>
        <div className="modal-footer" style={{ gap: "2rem" }}>
          <ModalCloseButton />
          <ModalDeleteButton id={task.id} />
        </div>
      </div>
    );
  }
}
