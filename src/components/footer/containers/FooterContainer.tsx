import { ReactNode } from "react";

export function FooterContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="p-2 d-flex gap-2 mx-4"
      style={{
        position: "sticky",
        bottom: 0,
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid gray",
      }}
    >
      {children}
    </div>
  );
}
