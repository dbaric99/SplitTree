import {
  SidebarMenu,
  Header,
  Title,
} from "../../../components/common-components";
import { Card } from "../../../components/common-components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AdminDashboard.module.css";
import { courseActions } from "../../../state/actions";
import { CourseHolder } from ".";

function AdminDashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.general.user);
  dispatch(courseActions.getCoursesForCompany(user.data.companyId));
  return (
    <div className={styles.container}>
      <div className={styles.pageWrapper}>
        <div>
          <Title classes={styles.dashboardTitle}>
            Welcome back,{" "}
            <span className={styles.dashboardTitleHighlight}>
              {user.data?.firstName || "Guest"}
            </span>
          </Title>
          <div className={styles.actionsWrapper}>
            <Card
              icon="add-team"
              title="New Course"
              description="Create new course"
            />
            <Card icon="add" title="New Team" description="Create a new team" />
          </div>
          <div className={styles.subtitlesBar}>
            <Title classes={styles.subtitle}>Latest Activity</Title>
          </div>
          <CourseHolder classes={styles.courseWrapper} />
        </div>
      </div>
    </div>
  );
}

export { AdminDashboard };
