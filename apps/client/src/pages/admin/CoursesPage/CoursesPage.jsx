import { Card, Title } from "../../../components/common-components";
import { useSelector } from "react-redux";
import { BasicCard } from "./BasicCard";
import styles from "./CoursesPage.module.css";

function CoursesPage() {
  const courses = useSelector((state) => state.general.courses);
  return (
    <div>
      <Card icon="add" title="New Course" description="Create new course" />
      <Title classes={styles.subtitle}>Courses</Title>
      <div className={styles.coursesWrapper}>
        {courses.data && courses.data.map(course => {
          return (
            <BasicCard key={course.guid} courseData={course}/>
          )
        })}
      </div>
    </div>
  );
}

export { CoursesPage };
