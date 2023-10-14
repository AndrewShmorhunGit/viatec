export function ModalBody({ title }: { title: string }) {
  return (
    <div className="modal-body">
      <p className="fs-4">{`Are you shure you want to delete ${title} task?`}</p>
    </div>
  );
}
