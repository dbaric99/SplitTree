import { SidebarMenu } from "../../../components/common-components";
import { Header } from "../../../components/common-components";

function CoursesPage() {
  return (
    <div>
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
      <div>
        <Header showSearchBar={true}/>
      </div>
    </div>
  )
}

export {CoursesPage}