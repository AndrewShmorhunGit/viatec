import { ReactNode } from "react";
export function MenuContainer({ children }: { children: ReactNode }) {
  return (
    <div className="d-flex align-items-center justify-content-between  gap-5">
      {children}
    </div>
  );
}
