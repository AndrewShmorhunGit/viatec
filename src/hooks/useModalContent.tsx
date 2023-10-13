import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "./useAppDispatch";
import { useClickOutside } from "./useClickOutside";
import { setModal } from "app/redux";
import { useThemeContext } from "context/theme.context";
import { palette } from "styles/palette";

export const useModalContent = () => {
  const dispatch = useAppDispatch();
  const { data, value } = useAppSelector((state) => state.modal);
  const refClickOutside = useRef<HTMLDivElement | null>(null);
  useClickOutside(refClickOutside, () =>
    dispatch(setModal({ value: "none", data: null }))
  );
  const { isMode } = useThemeContext();
  const theme = isMode === "dark" ? palette.color : palette.bg;
  return { data, value, refClickOutside, theme };
};
