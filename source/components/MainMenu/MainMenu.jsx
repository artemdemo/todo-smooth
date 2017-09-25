import Preact from 'preact';
import Icon from '../Icon/Icon';
import TriptychGrid from '../TriptychGrid/TriptychGrid';
import TriptychGridItem from '../TriptychGridItem/TriptychGridItem';

import './MainMenu.less';

const MainMenu = () => {
    return (
        <TriptychGrid className='main-menu'>
            <TriptychGridItem padded>
                <Icon name='bars' />
            </TriptychGridItem>
            <TriptychGridItem centered>
                TODO
            </TriptychGridItem>
            <TriptychGridItem padded>
                <Icon name='search' />
            </TriptychGridItem>
        </TriptychGrid>
    );
};

export default MainMenu;
