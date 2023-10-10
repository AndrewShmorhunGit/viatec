import { ReactNode } from "react";
export function BoardContainer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "1.2rem",
        boxShadow: "1px 2px 3px lightgrey",
        height: "100%",
        padding: "2rem",
      }}
    >
      {children}
    </div>
  );
}
