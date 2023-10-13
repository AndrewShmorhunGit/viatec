"use client";

import { ReactNode } from "react";
import { useModalContent } from "hooks/useModalContent";

export function ModalContentContainer({ children }: { children: ReactNode }) {
  const { data, value, refClickOutside, theme } = useModalContent();
  if (value !== "none" && data) {
    return (
      <div
        ref={refClickOutside}
        className="absolute-center h-auto rounded-3 position-relative"
        style={{
          maxWidth: "52rem",
          padding: "2rem 4rem",
          background: theme,
          color: theme,
        }}
      >
        {children}
      </div>
    );
  }
}
