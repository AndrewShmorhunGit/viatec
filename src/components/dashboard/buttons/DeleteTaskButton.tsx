"use client";
import { DeleteIcon } from "components/icons/DeleteIcon";

export function DeleteTaskButton() {
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        position: "absolute",
        bottom: "0.4rem",
        right: "2.8rem",
      }}
      onClick={() => console.log("delete")}
    >
      <DeleteIcon size={12} color={"orangered"} />
    </button>
  );
}
