import { ReactNode } from "react";
export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden h-100 d-flex flex-column">{children}</div>
  );
}
