import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Icon from '../../../components/Icon/Icon';
import LTText from '../../../components/LTText/LTText';
import TriptychGrid from '../../../components/TriptychGrid/TriptychGrid';
import TriptychGridItem from '../../../components/TriptychGridItem/TriptychGridItem';
import { toggleTaskDone, deleteTask } from '../../../model/tasks/taskActions';

import './TaskItem.less';

class TaskItem extends React.Component {
    deleteTask(e) {
        const { task, deleteTask, onDelete } = this.props;
        if (task.done) {
            e.stopPropagation();
            deleteTask(task.id);
            onDelete(task.id);
        }
    }

    toggleDone() {
        const { task, toggleTaskDone } = this.props;
        toggleTaskDone(task.id);
    }

    render() {
        const { task } = this.props;
        const checkboxClass = classnames({
            'task__checkbox': true,
            'task__checkbox_checked': task.done,
        });
        const nameClass = classnames({
            'task__name': true,
            'task__name_checked': task.done,
        });
        const deleteClass = classnames({
            'task__delete': true,
            'task__delete_show': task.done,
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
                        <LTText
                            className={nameClass}
                            lineThrough={task.done}
                        >
                            {task.name}
                        </LTText>
                    </TriptychGridItem>
                    <TriptychGridItem>
                        <div
                            className={deleteClass}
                            onClick={this.deleteTask.bind(this)}
                        >
                            <Icon name='trash-o' />
                        </div>
                    </TriptychGridItem>
                </TriptychGrid>
            </div>
        );
    }
}

TaskItem.propTypes = {
    task: PropTypes.shape({}),
    onDelete: PropTypes.func,
};

TaskItem.defaultProps = {
    task: {},
    onDelete: null,
};

export default connect(
    () => ({}), {
        toggleTaskDone,
        deleteTask,
    }
)(TaskItem);
