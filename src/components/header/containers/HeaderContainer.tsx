import { ReactNode } from "react";
export function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <div
      // className="container"
      style={{
        // background: "red",
        margin: "0 4rem",
        padding: "2rem 4rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid grey",
      }}
    >
      {children}
    </div>
  );
}
