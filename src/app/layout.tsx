import { AppContainer } from "components/containers/AppContainer";
import "styles/globals.scss";
import type { Metadata } from "next";
import { AppProvider } from "components/providers/AppProvider";
import { Header } from "components/header/Header";
import { Modal } from "components/modal/Modal";

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
        <Modal />
        <Header />
        {children}
      </AppProvider>
    </AppContainer>
  );
}
