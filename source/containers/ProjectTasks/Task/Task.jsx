import Preact from 'preact';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../../components/Icon/Icon';
import TriptychGrid from '../../../components/TriptychGrid/TriptychGrid';
import TriptychGridItem from '../../../components/TriptychGridItem/TriptychGridItem';

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
            <TriptychGrid className='task'>
                <TriptychGridItem>
                    <div className={checkboxClass} />
                </TriptychGridItem>
                <TriptychGridItem>
                    <span className={nameClass}>
                        {task.name}
                    </span>
                </TriptychGridItem>
                <TriptychGridItem>
                    &nbsp;
                </TriptychGridItem>
            </TriptychGrid>
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
