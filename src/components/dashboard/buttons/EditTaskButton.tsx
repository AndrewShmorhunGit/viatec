"use client";
import styles from "styles/modules/dashboard.module.scss";
import { setModal } from "app/redux";
import { EditIcon } from "components/icons/EditIcon";
import { useAppDispatch } from "hooks/useAppDispatch";

export function EditTaskButton({ taskId }: { taskId: string }) {
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.btn_edit}
      onClick={() => dispatch(setModal({ value: "edit", data: taskId }))}
    >
      <EditIcon size={14} color={"#5795a7"} />
    </button>
  );
}
