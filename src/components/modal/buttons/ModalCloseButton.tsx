import { setModal, useAppDispatch } from "app/redux";

export function ModalCloseButton() {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      className="btn btn-secondary fs-4"
      data-bs-dismiss="modal"
      onClick={() => dispatch(setModal({ value: "none", data: null }))}
    >
      Close
    </button>
  );
}
