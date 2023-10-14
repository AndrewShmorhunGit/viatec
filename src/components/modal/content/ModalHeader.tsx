import { ModalCloseX } from "../buttons/ModalCloseX";
export function ModalHeader({ title }: { title: string }) {
  return (
    <div className="modal-header">
      <h2 className="modal-title">{title}</h2>
      <ModalCloseX />
    </div>
  );
}
