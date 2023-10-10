import { DashboardContainer } from "components/containers/DashboardContainer";
import { Tasks } from "./tasks/Tasks";

export function Dashboard() {
  return (
    <DashboardContainer>
      <Tasks />
    </DashboardContainer>
  );
}
