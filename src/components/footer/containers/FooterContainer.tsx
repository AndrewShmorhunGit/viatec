import { ReactNode } from "react";

export function FooterContainer({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 d-flex gap-2 mx-4 position-sticky bottom-0 text-center flex-column align-items-center border-top border-gray">
      {children}
    </div>
  );
}
