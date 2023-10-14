"use client";
import { setModal } from "app/redux";
import { AddIcon } from "components/icons/AddIcon";
import { useThemeContext } from "context/theme.context";
import { useAppDispatch } from "hooks/useAppDispatch";
import { palette } from "styles/palette";
import { setInitialStatus } from "utils/functions";

export function AddTaskButton({ index }: { index: number }) {
  const dispatch = useAppDispatch();
  const { isMode } = useThemeContext();

  const handleAddTask = () => {
    dispatch(
      setModal({
        value: "add",
        data: setInitialStatus(index),
      })
    );
  };

  return (
    <div
      className={`p-4 bg-${
        isMode === "dark" ? "dark" : "light"
      } border rounded mt-4 d-flex justify-content-center pointer`}
      onClick={handleAddTask}
    >
      <AddIcon size={24} color={palette.main} />
    </div>
  );
}
