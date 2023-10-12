"use client";
import { setModal } from "app/redux";
import { EditIcon } from "components/icons/EditIcon";
import { useAppDispatch } from "hooks/useAppDispatch";

export function EditTaskButton({ taskId }: { taskId: string }) {
  const dispatch = useAppDispatch();
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        position: "absolute",
        bottom: "0.8rem",
        right: "1.2rem",
      }}
      onClick={() => dispatch(setModal({ value: "edit", data: taskId }))}
    >
      <EditIcon size={14} color={"#5795a7"} />
    </button>
  );
}
