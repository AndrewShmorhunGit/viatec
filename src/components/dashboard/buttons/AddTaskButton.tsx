"use client";
import { setModal } from "app/redux";
import { AddIcon } from "components/icons/AddIcon";
import { useThemeContext } from "context/theme.context";
import { useAppDispatch } from "hooks/useAppDispatch";
import { TaskStatusEnum } from "interfaces/ITasks";

export function AddTaskButton({ index }: { index: number }) {
  const dispatch = useAppDispatch();

  const setInitialStatus = (index: number): TaskStatusEnum =>
    index === 0
      ? TaskStatusEnum.TO_DO
      : index === 1
      ? TaskStatusEnum.IN_PROGRESS
      : TaskStatusEnum.DONE;

  const { isMode } = useThemeContext();
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        background: isMode !== "dark" ? "#f6f7fc" : " #1b1b1b",
        borderRadius: "0.8rem",
        border: "1px solid lightgray",
        padding: "1.2rem",
        marginTop: "1.2rem",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      }}
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
