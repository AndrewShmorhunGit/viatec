export function ModalContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flax",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        height: "100%",
        minWidth: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        zIndex: 99,
      }}
    >
      {children}
    </div>
  );
}
