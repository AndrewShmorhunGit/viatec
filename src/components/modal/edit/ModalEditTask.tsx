"use client";
import { useAppSelector } from "app/redux";

export function ModalEditTask() {
  const { value, data } = useAppSelector((state) => state.modal);
  const { tasks } = useAppSelector((store) => store.tasks);
  // const task = typeof data === "string" && getTaskById(data, tasks);
  if (value === "edit" && data) {
    return <>ModalEditTask</>;
  }
}
