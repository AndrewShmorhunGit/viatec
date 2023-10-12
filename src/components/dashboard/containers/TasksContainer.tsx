import { IBoard } from "interfaces/ITasks";
import { ReactNode } from "react";

export function TasksContainer({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {children}
    </div>
  );
}
