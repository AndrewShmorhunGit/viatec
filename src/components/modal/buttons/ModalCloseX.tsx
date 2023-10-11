"use client";
import { setModal, useAppDispatch } from "app/redux";

export function ModalCloseX() {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      className="btn-close"
      onClick={() => dispatch(setModal({ value: "none", data: null }))}
    ></button>
  );
}
