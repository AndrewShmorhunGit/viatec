"use client";
import styles from "styles/modules/dashboard.module.scss";
import { setModal } from "app/redux";
import { useAppDispatch } from "hooks/useAppDispatch";
import { LuClipboardEdit } from "react-icons/lu";
export function EditTaskButton({ taskId }: { taskId: string }) {
  const dispatch = useAppDispatch();
  return (
    <button
      role="task-edit-btn"
      className={styles.btn_edit}
      onClick={() => dispatch(setModal({ value: "edit", data: taskId }))}
    >
      <LuClipboardEdit size={16} color={"#5795a7"} />
    </button>
  );
}
