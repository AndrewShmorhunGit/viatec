import { deleteTask, setModal, useAppDispatch } from "app/redux";

export function ModalDeleteButton({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const handleModalDelete = () => {
    dispatch(deleteTask(id));
    dispatch(setModal({ value: "none", data: null }));
  };
  return (
    <button
      type="button"
      className="btn btn-primary fs-4 bg-main"
      onClick={handleModalDelete}
    >
      Delete
    </button>
  );
}
