"use client";
import { AddIcon } from "components/icons/AddIcon";

export function AddTaskButton() {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        background: "#f6f7fc",
        borderRadius: "0.8rem",
        border: "1px solid lightgray",
        padding: "1.2rem",
        marginTop: "1.2rem",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={() => console.log("add")}
    >
      <AddIcon size={24} color={"orange"} />
    </div>
  );
}
