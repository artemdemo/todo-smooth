import Preact from 'preact';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../../components/Icon/Icon';

import './Task.less';

class Task extends Preact.Component {
    render(props) {
        const { task } = props;
        const checkboxClass = classnames({
            'task__checkbox': true,
            'task__checkbox_checked': task.done,
        });
        const nameClass = classnames({
            'task__name': true,
            'task__name_checked': task.done,
        });
        return (
            <div className='task'>
                <div className={checkboxClass} />
                <span className={nameClass}>
                    {task.name}
                </span>
            </div>
        );
    }
}

Task.propTypes = {
    task: PropTypes.shape({}),
};

Task.defaultProps = {
    task: {},
};

export default Task;
