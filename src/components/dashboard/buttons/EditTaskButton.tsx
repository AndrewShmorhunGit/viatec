"use client";
import styles from "styles/modules/dashboard.module.scss";
import { setModal } from "app/redux";
import { useAppDispatch } from "hooks/useAppDispatch";
import { LuClipboardEdit } from "react-icons/lu";
import { palette } from "styles/palette";

export function EditTaskButton({ taskId }: { taskId: string }) {
  const dispatch = useAppDispatch();
  const handleEditTask = () => {
    dispatch(setModal({ value: "edit", data: taskId }));
  };

  return (
    <button
      role="task-edit-btn"
      className={styles.btn_edit}
      onClick={handleEditTask}
    >
      <LuClipboardEdit size={16} color={palette.main} />
    </button>
  );
}
