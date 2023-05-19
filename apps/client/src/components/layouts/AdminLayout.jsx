import { SidebarMenu } from "../common-components";
import { Header } from "../common-components";
import {PropTypes} from 'prop-types';

function AdminLayout({children}) {
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
      <div>
        <Header showSearchBar={true}/>
        {children}
      </div>
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node,
}

AdminLayout.defaultProps = {
  children: null,
}

export {AdminLayout}