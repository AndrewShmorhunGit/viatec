"use client";

import { updateTask, setModal, useAppDispatch } from "app/redux";

export function ModalEditButton({ id }: { id: string }) {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      className="btn btn-primary"
      style={{ background: "#5795a7", fontSize: "1.6rem" }}
      onClick={() => {
        // dispatch(deleteTask(id));
        dispatch(setModal({ value: "none", data: null }));
      }}
    >
      Edit
    </button>
  );
}
