import { useAppSelector } from "app/redux";

export function ModalContainer({ children }: { children: React.ReactNode }) {
  const { value } = useAppSelector((state) => state.modal);
  const condition = value !== "none";
  if (condition) {
    return (
      <div
        className="pointer position-fixed h-100 w-100"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: condition ? 99 : -1,
        }}
      >
        {children}
      </div>
    );
  }
}
