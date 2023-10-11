"use client";
import { useAppSelector } from "app/redux";
import { ModalCloseX } from "../buttons/ModalCloseX";
import { ModalCloseButton } from "../buttons/ModalCloseButton";
import { ITask } from "interfaces/ITasks";
import { getTaskById } from "utils/functions";
import { ModalEditButton } from "../buttons/ModalEditButton";
import { ModalEditForm } from "./ModalEditBody";

export function ModalEditTask() {
  // special hook
  const { value, data } = useAppSelector((state) => state.modal);
  const { tasks } = useAppSelector((store) => store.tasks);
  let task: ITask | null = null;
  if (data) {
    task = data ? getTaskById(data, tasks) : null;
  }

  if (value === "edit" && data && task) {
    return (
      <div className="modal-content">
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
          <ModalEditForm task={task} />
        </div>
        <div className="modal-footer" style={{ gap: "2rem" }}>
          <ModalCloseButton />
          <ModalEditButton id={task.id} />
        </div>
      </div>
    );
  }
}
