import {PropTypes} from 'prop-types';
import icons from '../../assets/icons/icons.svg';

function Card({icon, title, description}) {
  return (
    <div className='card-wrapper'>
        <svg width="46px" height="46px" className='card-icon'>
            <use href={`${icons}#${icon}`}/>
        </svg>
        <div className='card-text'>
            <div className='card-title'>{title}</div>
            <div className='card-description'>{description}</div>
        </div>
    </div>
  )
}

Card.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

Card.defaultProps = {
    icon: "add",
    title: "Title",
    description: "Description"
}

export {Card}