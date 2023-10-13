"use client";
import { setModal } from "app/redux";
import { AddIcon } from "components/icons/AddIcon";
import { useThemeContext } from "context/theme.context";
import { useAppDispatch } from "hooks/useAppDispatch";
import { setInitialStatus } from "utils/functions";

export function AddTaskButton({ index }: { index: number }) {
  const dispatch = useAppDispatch();
  const { isMode } = useThemeContext();

  return (
    <div
      className={`p-4 bg-${
        isMode === "dark" ? "dark" : "light"
      } border rounded mt-4 d-flex justify-content-center pointer`}
      onClick={() =>
        dispatch(
          setModal({
            value: "add",
            data: setInitialStatus(index),
          })
        )
      }
    >
      <AddIcon size={24} color={"#5795a7"} />
    </div>
  );
}
