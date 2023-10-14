"use client";

import { ReactNode } from "react";
import { useModalContent } from "hooks/useModalContent";

export function ContentFunctionalContainer({
  children,
}: {
  children: ReactNode;
}) {
  const { data, value, refClickOutside, theme, color } = useModalContent();
  if (value !== "none" && data) {
    return (
      <div
        ref={refClickOutside}
        className="absolute-center h-auto rounded-3 position-relative"
        style={{
          maxWidth: "52rem",
          padding: "2rem 4rem",
          background: theme,
          color: color,
        }}
      >
        {children}
      </div>
    );
  }
}
