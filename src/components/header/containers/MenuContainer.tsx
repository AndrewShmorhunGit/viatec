import { ReactNode } from "react";
export function MenuContainer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: "24rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
}
