import { setModal, useAppDispatch } from "app/redux";

export function ModalCloseButton() {
  const dispatch = useAppDispatch();
  const handleModalClose = () => {
    dispatch(setModal({ value: "none", data: null }));
  };
  return (
    <button
      type="button"
      className="btn btn-secondary fs-4"
      data-bs-dismiss="modal"
      onClick={handleModalClose}
    >
      Close
    </button>
  );
}
