import { setModal, useAppDispatch, useAppSelector } from "app/redux";
import { RootState } from "app/redux/store";
import { useClickOutside } from "hooks/useClickOutside";
import { useRef } from "react";
import { ModalDeleteTask } from "../delete/ModalDeleteTask";
import { ModalEditTask } from "../edit/ModalEditTask";
import { ModalAddTask } from "../add/ModalAddTask";
import { TaskStatusEnum } from "interfaces/ITasks";

export function ModalContent() {
  const refClickOutside = useRef<HTMLDivElement | null>(null);
  const { value, data } = useAppSelector((state: RootState) => state.modal);
  const dispatch = useAppDispatch();
  useClickOutside(refClickOutside, () =>
    dispatch(setModal({ value: "none", data: null }))
  );
  return (
    <div
      ref={refClickOutside}
      style={{
        width: "80rem",
        height: "auto",
        cursor: "auto",
        position: "relative",
      }}
    >
      {value === "delete" && data !== null && <ModalDeleteTask task={data} />}
      {value === "edit" && data !== null && <ModalEditTask task={data} />}
      {value === "add" && data !== null && (
        <ModalAddTask status={TaskStatusEnum.TO_DO} />
      )}
    </div>
  );
}
