import {PropTypes} from 'prop-types';
import icons from '../../assets/icons/icons.svg';

function CourseCard({courseData}) {
    console.log("COURSE DATA", courseData);
  return (
    <div className='course-wrapper'>
        <div className='dropdown-arrow'>
        <svg width="46px" height="46px" className='dropdown-icon'>
            <use href={`${icons}#dropdown-down`}/>
        </svg>
        </div>
        <div className='course-details'>
            <div className='course-name'>{courseData?.name || ""}</div>
            <div className='course-flags'></div>
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