import Preact from 'preact';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'preact-redux';
import Icon from '../../../components/Icon/Icon';
import TriptychGrid from '../../../components/TriptychGrid/TriptychGrid';
import TriptychGridItem from '../../../components/TriptychGridItem/TriptychGridItem';
import { toggleTaskDone, deleteTask } from '../../../model/tasks/taskActions';

import './Task.less';

class Task extends Preact.Component {
    deleteTask(e) {
        const { task, deleteTask } = this.props;
        e.stopPropagation();
        deleteTask(task.id);
    }

    renderDeleteButton() {
        const { task } = this.props;
        if (task.done) {
            return (
                <div
                    className='task__delete'
                    onClick={this.deleteTask.bind(this)}
                >
                    <Icon name='trash-o' />
                </div>
            );
        }
        return null;
    }

    toggleDone() {
        const { task, toggleTaskDone } = this.props;
        toggleTaskDone(task.id);
    }

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
            <div
                className='task'
                onClick={this.toggleDone.bind(this)}
            >
                <TriptychGrid>
                    <TriptychGridItem>
                        <div className={checkboxClass} />
                    </TriptychGridItem>
                    <TriptychGridItem>
                        <span className={nameClass}>
                            {task.name}
                        </span>
                    </TriptychGridItem>
                    <TriptychGridItem>
                        {this.renderDeleteButton()}
                    </TriptychGridItem>
                </TriptychGrid>
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

export default connect(
    () => ({}), {
        toggleTaskDone,
        deleteTask,
    }
)(Task);
