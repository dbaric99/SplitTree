import {PropTypes} from 'prop-types';
import icons from '../../../assets/icons/icons.svg';
import styles from './CoursesPage.module.css';
import placeholderCourse from '../../../assets/images/placeholder-course.png';

function BasicCard({courseData}) {
    console.log("COURSE:", courseData);
  return (
    <div className={styles.courseWrapper}>
        <img src={courseData.coverUrl || placeholderCourse} alt="" className={styles.courseCover}/>
        <div className={styles.titleWrapper}>
            <div className={styles.courseName}>{courseData.name}</div>
            <svg width="25px" height="25px" className={styles.editCourse}>
                <use href={`${icons}#edit`}/>
            </svg>
        </div>
        <div className={styles.courseDescription}>{courseData.description}</div>
    </div>
  )
}

BasicCard.propTypes = {
    courseData: PropTypes.object.isRequired
}

export {BasicCard}