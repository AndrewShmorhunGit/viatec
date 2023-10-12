import { ReactNode } from "react";
function DashboardContainer({ children }: { children: ReactNode }) {
  return <div className="my-5 mx-5 h-100">{children}</div>;
}
export { DashboardContainer };
