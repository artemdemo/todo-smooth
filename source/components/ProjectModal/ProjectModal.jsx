import Preact from 'preact';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ProjectHeader from '../ProjectHeader/ProjectHeader';

import './ProjectModal.less';

class ProjectModal extends Preact.Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: false,
            top: null,
            left: null,
            width: null,
            height: null,
            borderRadius: null,
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
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 0,
                });
            });
        });
    }

    closeModal(props) {
        const { rect } = props;
        this.setState({
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
            });
            this.isClosing = false;
        }
    }

    render(props) {
        const { project } = props;
        const modalClass = classnames({
            'project-modal': true,
            'project-modal_animation': this.state.animation,
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
                <ProjectHeader
                    color={project.color}
                    name={project.name}
                    percentDone={0.1}
                    icon={project.icon}
                    tasksAmount={10}
                />
            </div>
        );
    }
}

ProjectModal.propTypes = {
    project: PropTypes.shape({}),
    rect: PropTypes.shape({}),
};

ProjectModal.defaultProps = {
    project: {},
    rect: null,
};

export default ProjectModal;
