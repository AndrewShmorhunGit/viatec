import { ReactNode } from "react";
export function ContentContainer({ children }: { children: ReactNode }) {
  return <div className="modal-content gap-4">{children}</div>;
}
