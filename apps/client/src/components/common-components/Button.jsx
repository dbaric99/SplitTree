import {PropTypes} from 'prop-types';

function Button({children, classes, ...props}) {
  return (
    <button className={`default-button ${classes}`} {...props}>{children}</button>
  )
}

Button.propTypes = {
    children: PropTypes.any,
    classes: PropTypes.string,
}

Button.defultProps = {
    children: '',
    classes: '',
}

export {Button}