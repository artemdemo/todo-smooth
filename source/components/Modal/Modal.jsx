import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ModalMenu from './ModalMenu/ModalMenu';

import './Modal.less';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            animation: false,
            top: null,
            left: null,
            width: null,
            height: null,
        };

        this.isClosing = false;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.open !== nextProps.open) {
            if (nextProps.open === true) {
                this.openModal(nextProps);
            } else {
                this.closeModal(nextProps);
            }
        }
    }

    openModal(props) {
        const { rect } = props;
        this.setState({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
        window.requestAnimationFrame(() => {
            this.setState({
                animation: true,
            }, () => {
                this.setState({
                    open: true,
                    top: null,
                    left: null,
                    width: null,
                    height: null,
                });
            });
        });
    }

    closeModal(props = this.props) {
        const { rect } = props;
        this.setState({
            open: false,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
        this.isClosing = true;
    }

    transitionEnded() {
        if (this.isClosing) {
            this.setState({
                animation: false,
                open: false,
                top: null,
                left: null,
                width: null,
                height: null,
            });
            this.isClosing = false;
        }
    }

    sendCloseAction() {
        const { onClose } = this.props;
        onClose && onClose();
    }

    render() {
        const { buttons, caption } = this.props;
        const modalClass = classnames({
            'modal': true,
            'modal_animation': this.state.animation,
            'modal_open': this.state.open,
        });
        return (
            <div
                className={modalClass}
                style={{
                    top: this.state.top,
                    left: this.state.left,
                    width: this.state.width,
                    height: this.state.height,
                    borderRadius: this.state.borderRadius,
                }}
                onTransitionEnd={this.transitionEnded.bind(this)}
            >
                <ModalMenu
                    open={this.state.open}
                    buttons={buttons}
                    onLeftClick={this.sendCloseAction.bind(this)}
                >
                    {caption}
                </ModalMenu>
                <div className='modal__content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    rect: PropTypes.shape({
        top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
    buttons: PropTypes.shape({
        left: PropTypes.shape({
            icon: PropTypes.string,
            onClick: PropTypes.func,
        }),
        right: PropTypes.shape({
            icon: PropTypes.string,
            onClick: PropTypes.func,
        })
    }),
    caption: PropTypes.string,
    open: PropTypes.bool,
};

Modal.defaultProps = {
    rect: null,
    open: false,
    caption: '',
    buttons: undefined,
};

export default Modal;
