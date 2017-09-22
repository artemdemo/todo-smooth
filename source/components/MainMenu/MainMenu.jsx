import Preact from 'preact';
import Icon from '../Icon/Icon';

import './MainMenu.less';

const MainMenu = () => {
    return (
        <div className='main-menu'>
            <div className='main-menu__left'>
                <Icon name='bars' />
            </div>
            <div className='main-menu__center'>
                TODO
            </div>
            <div className='main-menu__right'>
                <Icon name='search' />
            </div>
        </div>
    );
};

export default MainMenu;
