"use client";

import { setModal, useAppDispatch } from "app/redux";
import { AddIcon } from "components/icons/AddIcon";
import { useDragContext } from "context/drag.context";
import { useThemeContext } from "context/theme.context";
import { IBoard } from "interfaces/ITasks";
import { setInitialStatus } from "utils/functions";

export function EmptyTasks({ board }: { board: IBoard }) {
  const dispatch = useAppDispatch();
  const { isMode } = useThemeContext();
  const { dragOverHandler, dropCardHandler } = useDragContext();
  return (
    <div
      className="d-flex align-items-center justify-content-center fs-1 pointer"
      style={{
        border: "1px solid lightgray",
        minHeight: "50rem",
        borderRadius: "1.2rem",
        opacity: 0.6,
        background: isMode === "dark" ? "#343a40 " : "#f8f9fa",
      }}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => dragOverHandler(e)}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => dropCardHandler(e, board)}
      onClick={() =>
        dispatch(
          setModal({
            value: "add",
            data: setInitialStatus(board.id),
          })
        )
      }
    >
      <div
        className="d-flex justify-content-center gap-4"
        style={{ flexDirection: "column" }}
      >
        <div className="center">
          <AddIcon size={48} color={"#5795a7"} />
        </div>
        <p className="fs-1">Add or Drop</p>
      </div>
    </div>
  );
}
