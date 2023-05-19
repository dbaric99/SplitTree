import {PropTypes} from 'prop-types';
import icons from '../../assets/icons/icons.svg';

function SearchBar({onSearch}) {
  return (
    <div className='search-bar-wrapper'>
        <svg width="25px" height="25px" className='search-icon'>
            <use href={`${icons}#search`}/>
        </svg>
        <input type="text" className='search-field' onChange={(e) => onSearch(e)}/>
    </div>
  )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func
}

SearchBar.defaultProps = {
    onSearch: () => {}
}

export {SearchBar}