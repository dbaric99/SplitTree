import { SidebarMenu } from "../common-components";
import { Header } from "../common-components";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div style={{display:'flex'}}>
      <SidebarMenu
        actions={[
          {
            iconEmpty: "dashboard-empty",
            iconFull: "dashboard-full",
            text: "Dashboard",
          },
          { iconEmpty: "teams-empty", iconFull: "teams-full", text: "Teams" },
          {
            iconEmpty: "courses-empty",
            iconFull: "courses-full",
            text: "Courses",
          },
          {
            iconEmpty: "analytics-empty",
            iconFull: "analytics-full",
            text: "Analytics",
          },
        ]}
      />
      <div style={{marginLeft: '82px', width: '79%'}}>
        <Header showSearchBar={true}/>
        <Outlet/>
      </div>
    </div>
  )
}

export {AdminLayout}