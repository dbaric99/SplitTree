import {PropTypes} from 'prop-types';

function CourseCard({courseData}) {
  return (
    <div>CourseCard</div>
  )
}

CourseCard.propTypes = {
    courseData: PropTypes.object
}

CourseCard.defaultProps = {
    courseData: {}
}

export {CourseCard}