"use client";
import styles from "styles/modules/dashboard.module.scss";
import { setModal } from "app/redux";
import { useAppDispatch } from "hooks/useAppDispatch";
import { FaRegTrashCan } from "react-icons/fa6";

export function DeleteTaskButton({ taskId }: { taskId: string }) {
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles.btn_delete}
      onClick={() => dispatch(setModal({ value: "delete", data: taskId }))}
    >
      <FaRegTrashCan size={16} color={"#5795a7"} />
    </button>
  );
}
