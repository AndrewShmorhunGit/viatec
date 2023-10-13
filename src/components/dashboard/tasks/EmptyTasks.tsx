"use client";

import { useThemeContext } from "context/theme.context";

export function EmptyTasks() {
  const { isMode } = useThemeContext();
  return (
    <div
      className="d-flex align-items-center justify-content-center fs-1 pointer"
      style={{
        border: "1px solid lightgray",
        minHeight: "50rem",
        borderRadius: "1.2rem",
        opacity: 0.6,
        background: isMode === "dark" ? "#343a40 " : "#f8f9fa",
      }}
    >
      <div className="">
        {/* <div
          style={{
            width: "12rem",
            height: "12rem",
            fontSize: "6.8rem",
            border: "3px grey solid",
            borderRadius: "50%",
          }}
        >
          <p className="text-center">+</p>
        </div> */}
        <p style={{ fontSize: "4rem" }}>Add or Darg</p>
      </div>
    </div>
  );
}
