"use client";
import { setModal, useAppDispatch, useAppSelector } from "app/redux";
import { useClickOutside } from "hooks/useClickOutside";
import { ReactNode, useRef } from "react";
import { useThemeContext } from "context/theme.context";

export function ModalContentContainer({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const { data, value } = useAppSelector((state) => state.modal);
  // const refClickOutside = useRef<HTMLDivElement | null>(null);
  // useClickOutside(refClickOutside, () =>
  //   dispatch(setModal({ value: "none", data: null }))
  // );
  // const { isMode } = useThemeContext();
  if (value !== "none" && data) {
    return (
      <div
        // ref={refClickOutside}
        className="absolute-center"
        style={{
          maxWidth: "80rem",
          height: "auto",
          borderRadius: "1.2rem",
          cursor: "auto",
          // position: "relative",
          padding: "2rem 4rem",
          // background: isMode === "dark" ? "#333333" : "#f6f7fc",
          // color: isMode === "dark" ? "#f6f7fc" : "#333333",
        }}
      >
        {data && children}
      </div>
    );
  }
}
