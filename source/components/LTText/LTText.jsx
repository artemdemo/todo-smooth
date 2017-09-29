import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './LTText.less';

class LTText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineWidth: 0,
            animated: false,
        };

        this.textRef = null;
    }

    setTextRef(ref) {
        this.textRef = ref;
    }

    componentDidMount() {
        this.setState({
            lineWidth: this.textRef.offsetWidth,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.lineThrough !== nextProps.lineThrough) {
            this.setState({
                animated: true,
            });
        }
    }

    render() {
        const { lineThrough, className } = this.props;
        const wrapClass = classnames(className, 'lt-text-wrap');
        const ltClass = classnames({
            'lt-text-line': true,
            'lt-text-line_animated': this.state.animated,
        });
        return (
            <div className={wrapClass}>
                <div
                    className={ltClass}
                    style={{
                        width: lineThrough ? this.state.lineWidth : 0,
                    }}
                />
                <span ref={this.setTextRef.bind(this)}>
                    {this.props.children}
                </span>
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
