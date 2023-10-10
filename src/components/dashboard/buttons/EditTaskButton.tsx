"use client";
import { EditIcon } from "components/icons/EditIcon";

export function EditTaskButton() {
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        position: "absolute",
        bottom: "0.4rem",
        right: "1.2rem",
      }}
      onClick={() => console.log("edit")}
    >
      <EditIcon size={10} color={"orange"} />
    </button>
  );
}
