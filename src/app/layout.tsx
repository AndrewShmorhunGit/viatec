import { AppContainer } from "components/app/AppContainer";
import "styles/globals.scss";
import type { Metadata } from "next";
import { AppProvider } from "components/app/AppProvider";
import { Header } from "components/header/Header";

export const metadata: Metadata = {
  title: "Viatec Test App",
  description: "Created by Andrew Shmorhun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContainer>
      <AppProvider>
        <Header />
        {children}
      </AppProvider>
    </AppContainer>
  );
}
