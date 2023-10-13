"use client";
import styles from "styles/modules/dashboard.module.scss";
import { setModal } from "app/redux";
import { useAppDispatch } from "hooks/useAppDispatch";
import { FaRegTrashCan } from "react-icons/fa6";
import { palette } from "styles/palette";

export function DeleteTaskButton({ taskId }: { taskId: string }) {
  const dispatch = useAppDispatch();
  const handleDeleteTask = () => {
    dispatch(setModal({ value: "delete", data: taskId }));
  };
  return (
    <button
      role="task-delete-btn"
      className={styles.btn_delete}
      onClick={handleDeleteTask}
    >
      <FaRegTrashCan size={16} color={palette.main} />
    </button>
  );
}
