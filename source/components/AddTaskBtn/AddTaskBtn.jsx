import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './AddTaskBtn.less';

class AddTaskBtn extends React.Component {
    handleClick() {
        const { onClick } = this.props;
        onClick && onClick();
    }

    render() {
        const { open, isSaving } = this.props;
        const btnClass = classnames({
            'add-task-button': true,
            'add-task-button_open': open,
            'add-task-button_is-saving': isSaving,
        });
        return (
            <div
                className={btnClass}
                onClick={this.handleClick.bind(this)}
            >
                <span className='add-task-button__text'>
                    +
                </span>
            </div>
        );
    }
}

AddTaskBtn.propTypes = {
    open: PropTypes.bool,
    isSaving: PropTypes.bool,
    onClick: PropTypes.func,
};

AddTaskBtn.defaultProps = {
    open: false,
    isSaving: false,
    onClick: null,
};

export default AddTaskBtn;
