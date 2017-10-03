import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import TriptychGrid from '../../TriptychGrid/TriptychGrid';
import TriptychGridItem from '../../TriptychGridItem/TriptychGridItem';

import './ModalMenu.less';

const ModalMenu = (props) => {
    const { open, buttons } = props;
    const menuClass = classnames({
        'modal-menu': true,
        'modal-menu_open': open,
    });

    const renderButton = (button) => {
        const icon = button.icon ? <Icon name={button.icon} /> : <span>&nbsp;</span>;
        return (
            <div onClick={() => button.onClick && button.onClick()}>
                {icon}
            </div>
        );
    };

    return (
        <TriptychGrid className={menuClass}>
            <TriptychGridItem padded>
                {renderButton(buttons.left)}
            </TriptychGridItem>
            <TriptychGridItem centered>
                {props.children}
            </TriptychGridItem>
            <TriptychGridItem padded>
                {renderButton(buttons.right)}
            </TriptychGridItem>
        </TriptychGrid>
    );
};

ModalMenu.propTypes = {
    open: PropTypes.bool,
    buttons: PropTypes.shape({
        left: PropTypes.shape({
            icon: PropTypes.string,
            onClick: PropTypes.func,
        }),
        right: PropTypes.shape({
            icon: PropTypes.string,
            onClick: PropTypes.func,
        }),
    }),
};

ModalMenu.defaultProps = {
    open: false,
    buttons: {
        left: {
            icon: 'arrow-left',
            onClick: null,
        },
        right: {
            icon: 'ellipsis-v',
            onClick: null,
        },
    },
};

export default ModalMenu;
