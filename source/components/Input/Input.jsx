import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Input.less';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const { value, className, onChange } = this.props;
        const newState = {
            value,
        };
        if (onChange) {
            newState.onChange = this.changeHandler.bind(this);
        }
        this.setState(newState);
    }

    componentWillReceiveProps(nextProps) {
        const valueChanged = this.props.value !== nextProps.value;
        const onChangeChanged = this.props.onChange !== nextProps.onChange;
        const newState = {};
        if (valueChanged) {
            newState.value = nextProps.value;
        }
        if (onChangeChanged) {
            newState.onChange = nextProps.onChange;
        }
        this.setState(newState);
    }

    changeHandler(e) {
        const { onChange } = this.props;
        onChange && onChange(e);
    }

    render() {
        const { className, placeholder } = this.props;
        const inputClass = classnames('input', className);
        return (
            <input
                className={inputClass}
                placeholder={placeholder}
                {...this.state}
            />
        );
    }
}

Input.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    value: undefined,
    className: '',
    placeholder: '',
    onChange: null,
};

export default Input;
