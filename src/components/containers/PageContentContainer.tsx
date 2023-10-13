import { ReactNode } from "react";
export function PageContentContainer({ children }: { children: ReactNode }) {
  return (
    <div className="py-5 px-5" style={{ height: "calc(100vh - 17.2rem)" }}>
      {children}
    </div>
  );
}
