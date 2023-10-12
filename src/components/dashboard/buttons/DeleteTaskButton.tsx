"use client";
import styles from "styles/modules/dashboard.module.scss";
import { setModal } from "app/redux";
import { DeleteIcon } from "components/icons/DeleteIcon";
import { useAppDispatch } from "hooks/useAppDispatch";

export function DeleteTaskButton({ taskId }: { taskId: string }) {
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles.btn_delete}
      onClick={() => dispatch(setModal({ value: "delete", data: taskId }))}
    >
      <DeleteIcon size={16} color={"orangered"} />
    </button>
  );
}
