"use client";
import { setModal, useAppDispatch } from "app/redux";

export function ModalCloseX() {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      className="btn-close"
      style={{ transform: "scale(2)" }}
      onClick={() => dispatch(setModal({ value: "none", data: null }))}
    ></button>
  );
}
