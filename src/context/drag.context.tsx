"use client";
import { useDrag } from "hooks/useDrag";
import { IDrag } from "interfaces/IDreg";
import { ReactNode, createContext, useContext } from "react";

export const DragContext = createContext<IDrag | null>(null);

export function DragContextProvider({ children }: { children: ReactNode }) {
  const {
    isBoards,
    dragStartHandler,
    dragEndHandler,
    dropHandler,
    dropCardHandler,
    dragOverHandler,
    dragLeaveHandler,
  } = useDrag();

  return (
    <DragContext.Provider
      value={{
        isBoards,
        dragStartHandler,
        dragEndHandler,
        dropHandler,
        dropCardHandler,
        dragOverHandler,
        dragLeaveHandler,
      }}
    >
      {children}
    </DragContext.Provider>
  );
}

export function useDragContext() {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error("useDragContext must be used within a DragContextProvider");
  }
  return context;
}
