import { setModal, useAppDispatch } from "app/redux";

export function ModalCloseButton() {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-bs-dismiss="modal"
      style={{ fontSize: "1.6rem" }}
      onClick={() => dispatch(setModal({ value: "none", data: null }))}
    >
      Close
    </button>
  );
}
