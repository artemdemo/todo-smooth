import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Input.less';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    changeHandler(e) {
        const { onChange, value } = this.props;
        const inputValue = e.target.value;
        onChange && onChange(inputValue);
        if (value === undefined) {
            this.setState({
                value: inputValue,
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value,
            });
        }
    }

    render() {
        const { className, placeholder, error } = this.props;
        const inputClass = classnames(className, {
            'input': true,
            'input_error': error,
        });
        return (
            <input
                className={inputClass}
                placeholder={placeholder}
                value={this.state.value}
                onChange={this.changeHandler.bind(this)}
            />
        );
    }
}

Input.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool,
};

Input.defaultProps = {
    value: undefined,
    className: '',
    placeholder: '',
    onChange: null,
    error: false,
};

export default Input;
