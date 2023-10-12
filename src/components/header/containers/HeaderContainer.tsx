import { ReactNode } from "react";
export function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-4 px-4 py-4 d-flex align-items-center justify-content-between border-bottom border-1 border-secondary">
      {children}
    </div>
  );
}
