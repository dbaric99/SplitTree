import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import { CourseCard } from "../../../components/common-components";

function CourseHolder({ classes }) {
  const courses = useSelector((state) => state.general.courses);
  return (
    <div className={classes}>
      {courses.data &&
        courses.data.map((course, index) => {
          return <CourseCard key={index} courseData={course} />;
        })}
    </div>
  );
}

CourseHolder.propTypes = {
  classes: PropTypes.string,
};

CourseHolder.defaultProps = {
  classes: "",
};

export { CourseHolder };
