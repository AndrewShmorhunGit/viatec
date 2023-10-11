"use client";
import { useAppSelector } from "app/redux";

export function ModalAddTask() {
  const { value, data } = useAppSelector((state) => state.modal);

  if (value === "add" && data) {
    return <>ModalAddTask</>;
  }
}
