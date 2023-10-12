import { ReactNode } from "react";
export function TasksContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="d-flex flex-column gap-3 scroll-bar px-2"
      style={{ overflowY: "auto", maxHeight: "calc(100vh - 37.2rem)" }}
    >
      {children}
    </div>
  );
}
