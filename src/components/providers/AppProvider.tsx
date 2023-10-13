import { ThemeContextProvider } from "context/theme.context";
import { ReactNode } from "react";
import Provider from "app/redux/provider";
import { DragContextProvider } from "context/drag.context";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <DragContextProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </DragContextProvider>
    </Provider>
  );
}
