"use client";
import { useAppSelector } from "app/redux";

export function ModalContainer({ children }: { children: React.ReactNode }) {
  const { value, data } = useAppSelector((state) => state.modal);
  const condition = value !== "none" && data;
  if (condition) {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          minWidth: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
          zIndex: condition ? 99 : -1,
          display: condition ? "flex" : "none",
        }}
      >
        {children}
      </div>
    );
  }
}
