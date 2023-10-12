import { ReactNode } from "react";
export function TasksContainer({ children }: { children: ReactNode }) {
  return <div className="d-flex flex-column gap-3">{children}</div>;
}
