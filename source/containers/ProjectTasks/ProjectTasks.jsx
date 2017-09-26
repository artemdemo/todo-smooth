import Preact from 'preact';
import classnames from 'classnames';
import { connect } from 'preact-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import Task from './Task/Task';

import './ProjectTasks.less';

const tasksSelector = createSelector(
    props => props.project,
    props => props.tasks,
    (project, tasks) => {
        if (project.tasks && project.tasks.length > 0) {
            return tasks.data
                .filter(task => project.tasks.includes(task.id))
                .reduce((acc, task) => {
                    if (task.done) {
                        acc.done.push(task);
                    }
                    acc.notDone.push(task);
                    return acc;
                }, {done: [], notDone: []});
        }
        return null;
    },
);

const ProjectTasks = (props) => {
    const renderList = (isDone) => {
        const tasksMap = tasksSelector(props);
        if (!tasksMap) {
            return null;
        }

        const tasks = isDone ? tasksMap.done : tasksMap.notDone;
        if (tasks.length === 0) {
            return null;
        }

        const title = isDone ? 'Done' : 'To Do';
        return (
            <div>
                <div className='project-tasks__name'>
                    {title}
                </div>
                <div className='project-tasks-list'>
                    {tasks.map((task) => {
                        if (task.done === isDone) {
                            return (
                                <Task task={task} />
                            );
                        }
                        return null
                    })}
                </div>
            </div>
        );
    };

    const { open } = props;
    const tasksClass = classnames({
        'project-tasks': true,
        'project-tasks_open': open,
    });

    return (
        <div className={tasksClass}>
            {renderList(false)}
            {renderList(true)}
        </div>
    );
};

ProjectTasks.propTypes = {
    project: PropTypes.shape({}),
    open: PropTypes.bool,
};

ProjectTasks.defaultProps = {
    project: {},
    open: false,
};

export default connect(
    state => ({
        tasks: state.tasks,
    }),
)(ProjectTasks);
