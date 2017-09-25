import Preact from 'preact';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import TriptychGrid from '../../TriptychGrid/TriptychGrid';
import TriptychGridItem from '../../TriptychGridItem/TriptychGridItem';

import './ModalMenu.less';

const ModalMenu = (props) => {
    const { open } = props;
    const menuClass = classnames({
        'modal-menu': true,
        'modal-menu_open': open,
    });

    const leftClick = () => {
        const { onLeftClick } = props;
        onLeftClick && onLeftClick();
    };

    return (
        <TriptychGrid className={menuClass}>
            <TriptychGridItem padded>
                <div onClick={leftClick}>
                    <Icon name='arrow-left' />
                </div>
            </TriptychGridItem>
            <TriptychGridItem centered>
                &nbsp;
            </TriptychGridItem>
            <TriptychGridItem padded>
                <Icon name='ellipsis-v' />
            </TriptychGridItem>
        </TriptychGrid>
    );
};

ModalMenu.propTypes = {
    onLeftClick: PropTypes.func,
    open: PropTypes.bool,
};

ModalMenu.defaultProps = {
    onLeftClick: null,
    open: false,
};

export default ModalMenu;
