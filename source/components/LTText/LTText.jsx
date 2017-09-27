import Preact from 'preact';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './LTText.less';

class LTText extends Preact.Component {
    constructor(props) {
        super(props);
        this.state = {
            animated: true,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.lineThrough !== nextProps.lineThrough) {
            this.setState({
                animated: true,
            });
        }
    }

    transitionEnded() {
        console.log('transitionEnded');
        this.setState({
            animated: false
        });
    }

    render(props, state) {
        const { lineThrough, className } = props;
        const wrapClass = classnames(className, 'lt-text-wrap');
        const ltClass = classnames({
            'lt-text-line': true,
            'lt-text-line_animated': state.animated,
            'lt-text-line_show': lineThrough,
        });
        return (
            <div className={wrapClass}>
                <div
                    className={ltClass}
                    onTransitionEnd={this.transitionEnded.bind(this)}
                />
                {props.children}
            </div>
        );
    }
}

LTText.propTypes = {
    lineThrough: PropTypes.bool,
    className: PropTypes.string,
};

LTText.defaultProps = {
    lineThrough: false,
    className: '',
};

export default LTText;
