import Preact from 'preact';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';

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
        <div className={menuClass}>
            <div
                className='modal-menu__left'
                onClick={leftClick}
            >
                <Icon name='arrow-left' />
            </div>
            <div className='modal-menu__center'>
                &nbsp;
            </div>
            <div className='modal-menu__right'>
                <Icon name='ellipsis-v' />
            </div>
        </div>
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
