import { DashboardContainer } from "components/dashboard/containers/DashboardContainer";
import { Boards } from "./boards/Boards";

export function Dashboard() {
  return (
    <DashboardContainer>
      <Boards />
    </DashboardContainer>
  );
}
