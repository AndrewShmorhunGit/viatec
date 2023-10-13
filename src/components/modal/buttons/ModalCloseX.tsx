import { setModal, useAppDispatch } from "app/redux";

export function ModalCloseX() {
  const dispatch = useAppDispatch();
  const handleModalClose = () => {
    dispatch(setModal({ value: "none", data: null }));
  };
  return (
    <button
      type="button"
      className="btn-close"
      style={{ transform: "scale(2)" }}
      onClick={handleModalClose}
    ></button>
  );
}
