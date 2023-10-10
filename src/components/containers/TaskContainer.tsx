import { ReactNode } from "react";
export function TaskContainer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "#f6f7fc",
        borderRadius: "0.8rem",
        cursor: "grab",
        border: "1px solid lightgray",
        padding: "1.2rem",
      }}
    >
      {children}
    </div>
  );
}
