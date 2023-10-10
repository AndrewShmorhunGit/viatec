import { ReactNode } from "react";
function DashboardContainer({ children }: { children: ReactNode }) {
  return <div style={{ margin: "4rem", height: "100%" }}>{children}</div>;
}
export { DashboardContainer };
