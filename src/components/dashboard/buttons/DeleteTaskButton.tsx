"use client";
import { setModal } from "app/redux";
import { DeleteIcon } from "components/icons/DeleteIcon";
import { useAppDispatch } from "hooks/useAppDispatch";

export function DeleteTaskButton({ taskId }: { taskId: string }) {
  const dispatch = useAppDispatch();

  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        position: "absolute",
        bottom: "0.8rem",
        right: "3.8rem",
      }}
      onClick={() => dispatch(setModal({ value: "delete", data: taskId }))}
    >
      <DeleteIcon size={16} color={"orangered"} />
    </button>
  );
}
