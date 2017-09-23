import Preact from 'preact';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ModalMenu from './ModalMenu/ModalMenu';

import './ProjectModal.less';

class ProjectModal extends Preact.Component {
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

    render(props) {
        const { project } = props;
        const modalClass = classnames({
            'project-modal': true,
            'project-modal_animation': this.state.animation,
            'project-modal_open': this.state.open,
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
                    onLeftClick={this.sendCloseAction.bind(this)}
                />
                <div className='project-modal__content'>
                    <ProjectHeader
                        color={project.color}
                        name={project.name}
                        percentDone={0.1}
                        icon={project.icon}
                        tasksAmount={10}
                        open={this.state.open}
                    />
                </div>
            </div>
        );
    }
}

ProjectModal.propTypes = {
    project: PropTypes.shape({}),
    rect: PropTypes.shape({}),
    open: PropTypes.bool,
    onClose: PropTypes.func,
};

ProjectModal.defaultProps = {
    project: {},
    rect: null,
    open: false,
    onClose: null,
};

export default ProjectModal;
