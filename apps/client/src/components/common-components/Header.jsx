import { SearchBar } from ".";
import {PropTypes} from 'prop-types';
import { useSelector } from "react-redux";
import icons from '../../assets/icons/icons.svg';
import profilePlaceholder from '../../assets/images/placeholder-profile.png';

function Header({showSearchBar, onSearch}) {
    const user = useSelector(state => state.general.user);
  return (
    <div className="header-wrapper" >
        {showSearchBar && <SearchBar onSearch={onSearch}/>}
        <div className="profile-wrapper">
            <svg width="25px" height="25px" className="notification-icon">
                <use href={`${icons}#notification-empty`}/>
            </svg>
            <div className="profile-image">
                <img src={user.data.profileImg || profilePlaceholder} alt="" />
                <span className="username">{user.data?.firstName || "User"}</span>
                <svg width="25px" height="25px">
                    <use href={`${icons}#chevron-down`}/>
                </svg>
            </div>
        </div>
    </div>
  )
}

Header.propTypes = {
    showSearchBar: PropTypes.bool,
    onSearch: PropTypes.func,
}

Header.defaultProps = {
    showSearchBar: false,
    onSearch: () => {},
}

export {Header}