import { ReactNode } from "react";
export function BoardsContainer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        columnGap: "3.2rem",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}
