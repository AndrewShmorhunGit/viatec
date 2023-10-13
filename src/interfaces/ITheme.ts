import { Dispatch, SetStateAction } from "react";

export interface ITheme {
  isMode: string;
  setMode: Dispatch<SetStateAction<string>>;
  toggleTheme: () => void;
  checkTheme: boolean;
  isLightTheme: boolean;
}
