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
                .filter(task => project.tasks.includes(task.id));
        }
        return [];
    },
);

const ProjectTasks = (props) => {
    const tasks = tasksSelector(props);

    const { open } = props;
    const tasksClass = classnames({
        'project-tasks': true,
        'project-tasks_open': open,
    });

    return (
        <div className={tasksClass}>
            <div>
                <div className='project-tasks__name'>
                    Tasks
                </div>
                <div className='project-tasks-list'>
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            key={`project-tasks-list_item-${index}-${Math.floor(Math.random() * 1000)}`}
                        />
                    ))}
                </div>
            </div>
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
