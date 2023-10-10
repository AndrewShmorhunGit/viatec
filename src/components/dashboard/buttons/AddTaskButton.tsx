"use client";
import { AddIcon } from "components/icons/AddIcon";
import { useThemeContext } from "context/theme.context";

export function AddTaskButton() {
  const { isMode } = useThemeContext();
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        background: isMode !== "dark" ? "#f6f7fc" : " #1b1b1b",
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
      <AddIcon size={24} color={"#5795a7"} />
    </div>
  );
}
