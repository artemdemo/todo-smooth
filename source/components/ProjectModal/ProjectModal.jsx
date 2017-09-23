import Preact from 'preact';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.rect !== nextProps.rect) {
            const { rect } = nextProps;
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
    }

    render() {
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
            >

            </div>
        );
    }
}

ProjectModal.propTypes = {
    project: PropTypes.shape({}),
    rect: PropTypes.shape({}),
};

ProjectModal.defaultProps = {
    project: null,
    rect: null,
};

export default ProjectModal;
