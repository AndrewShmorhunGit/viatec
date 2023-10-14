import { ReactNode } from "react";
import { ModalCloseButton } from "../buttons/ModalCloseButton";

export function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <div className="modal-footer gap-4">
      <ModalCloseButton />
      {children}
    </div>
  );
}
