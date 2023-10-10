import { ThemeContextProvider } from "context/theme.context";
import { ReactNode } from "react";
import Provider from "redux/provider";
export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </Provider>
  );
}
