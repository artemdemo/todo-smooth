import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import Task from './Task/Task';
import { removeTaskFromProject } from '../../model/projects/projectActions';

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

class ProjectTasks extends React.Component {
    removeTask(taskId) {
        const { project, removeTaskFromProject } = this.props;
        removeTaskFromProject(project.id, taskId);
    }

    render() {
        const tasks = tasksSelector(this.props);

        const { open } = this.props;
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
                        {tasks.map((task, index) => {
                            const key = `project-tasks-list_item-${index}-${task.name.replace(/\s/g, '-')}`;
                            return (
                                <Task
                                    task={task}
                                    onDelete={this.removeTask.bind(this)}
                                    key={key}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

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
    }), {
        removeTaskFromProject,
    }
)(ProjectTasks);
