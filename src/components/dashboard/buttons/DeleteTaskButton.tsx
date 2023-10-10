"use client";
import { DeleteIcon } from "components/icons/DeleteIcon";

export function DeleteTaskButton() {
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        position: "absolute",
        bottom: "0.8rem",
        right: "3.8rem",
      }}
      onClick={() => console.log("delete")}
    >
      <DeleteIcon size={16} color={"orangered"} />
    </button>
  );
}
