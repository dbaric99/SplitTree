import { SidebarMenu } from "../../../components/common-components";
import styles from "./AdminDashboard.module.css";

function AdminDashboard() {
  return (
    <div>
      <SidebarMenu
        actions={[
          { iconEmpty: "dashboard-empty", iconFull: "dashboard-full", text: "Dashboard" },
          { iconEmpty: "teams-empty", iconFull: "teams-full", text: "Teams" },
          { iconEmpty: "courses-empty", iconFull: "courses-full", text: "Courses" },
          { iconEmpty: "analytics-empty", iconFull: "analytics-full", text: "Analytics" },
        ]}
      />
    </div>
  );
}

export { AdminDashboard };
