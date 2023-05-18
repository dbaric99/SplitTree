import {PropTypes} from 'prop-types';

function InputField({placeholder, labelText, type, ...props}) {
  return (
    <div className='input-wrapper'>
        <label className='input-label'>{labelText}
            <input type={type} placeholder={placeholder} {...props} className='input-field' />
        </label>
    </div>
  )
}

InputField.propTypes = {
    placeholder: PropTypes.string,
    labelClass: PropTypes.string,
    fieldClass: PropTypes.string,
    labelText: PropTypes.string,
    type: PropTypes.string,
}

InputField.defaultProps = {
    placeholder: '',
    fieldClass: '',
    labelClass: '',
    labelText: '',
    type: 'text',
}

export {InputField}