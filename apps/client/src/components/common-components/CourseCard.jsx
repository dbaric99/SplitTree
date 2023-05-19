import {PropTypes} from 'prop-types';
import icons from '../../assets/icons/icons.svg';
import coursePlaceholder from '../../assets/images/placeholder-course.png';

function CourseCard({courseData}) {
  return (
    <div className='course-wrapper'>
        <div className='course-details'>
            <svg width="46px" height="46px" className='dropdown-icon'>
                <use href={`${icons}#dropdown-down`}/>
            </svg>
            <div className='course-name'>{courseData?.name || ""}</div>
        </div>
        <div className='course-flags'></div>
        <div className='course-cover'>
            <img src={courseData?.courseUrl ?? coursePlaceholder} alt="" />
        </div>
    </div>
  )
}

CourseCard.propTypes = {
    courseData: PropTypes.object
}

CourseCard.defaultProps = {
    courseData: {}
}

export {CourseCard}