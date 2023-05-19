import {PropTypes} from 'prop-types';
import logo from '../../assets/images/logotype.png';
import icons from '../../assets/icons/icons.svg';

function SidebarMenu({actions}) {
  return (
    <div className='sidebar-menu-wrapper'>
        <div className='logotype-wrapper'>
            <img src={logo} alt="" />
        </div>
        <div className='menu-actions-wrapper'>
            {actions.map((action, index) => {
                return (
                    <div key={index} className='menu-action'>
                        <svg width="25px" height="25px">
                            <use href={`${icons}#${action?.iconEmpty || ''}`}/>
                        </svg>
                        <span>{action?.text || ''}</span>
                    </div>
                )
            })}
        </div>
        <div className='menu-action logout'>
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