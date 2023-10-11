"use client";
import { EditIcon } from "components/icons/EditIcon";

export function EditTaskButton({ taskId }: { taskId: string }) {
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        position: "absolute",
        bottom: "0.8rem",
        right: "1.2rem",
      }}
      onClick={() => console.log("edit")}
    >
      <EditIcon size={14} color={"#5795a7"} />
    </button>
  );
}
