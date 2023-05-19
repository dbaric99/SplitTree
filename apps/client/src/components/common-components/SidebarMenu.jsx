import {PropTypes} from 'prop-types';
import logo from '../../assets/images/logotype.png';
import icons from '../../assets/icons/icons.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { generalActions } from '../../state/actions';

function SidebarMenu({actions}) {
    const url = window.location.href;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const switchPage = (e, action) => {
        navigate(`/admin/${action.text.toLowerCase()}`);
    }

    const logout = () => {
        dispatch(generalActions.setUser({}));
        navigate('/');
    }

  return (
    <div className='sidebar-menu-wrapper'>
        <div className='logotype-wrapper'>
            <img src={logo} alt="" />
        </div>
        <div className='menu-actions-wrapper'>
            {actions.map((action, index) => {
                return (
                    <div key={index} className='menu-action' onClick={(e) => switchPage(e, action)}>
                        <svg width="25px" height="25px">
                            <use href={`${icons}#${url.includes(action?.text.toLowerCase()) ? action?.iconFull : action?.iconEmpty}`}/>
                        </svg>
                        <span className={url.includes(action?.text.toLowerCase()) ? 'menu-text-active' : ''}>{action?.text || ''}</span>
                    </div>
                )
            })}
        </div>
        <div className='menu-action logout' onClick={() => logout()}>
            <svg width="25px" height="25px">
                <use href={`${icons}#logout-gray`}/>
            </svg>
            <span>Logout</span>
        </div>
    </div>
  )
}

SidebarMenu.propTypes = {
    actions: PropTypes.array
}

SidebarMenu.defaultProps = {
    actions: []
}

export {SidebarMenu}