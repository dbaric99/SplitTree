import {PropTypes} from 'prop-types';

function Title({children, classes}) {
  return (
    <h1 className={classes}>{children}</h1>
  )
}

Title.propTypes = {
    classes: PropTypes.string,
    children: PropTypes.any,
}
Title.defaultProps = {
    classes: 'default-title',    
    children: '',
}

export {Title}