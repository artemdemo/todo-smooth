import Preact from 'preact';
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
            return tasks.data.filter(task => project.tasks.includes(task.id));
        }
        return [];
    },
);

class ProjectTasks extends Preact.Component {
    renderList(isDone) {
        const tasks = tasksSelector(this.props);
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
    }

    render() {
        return (
            <div className='project-tasks'>
                {this.renderList(false)}
                {this.renderList(true)}
            </div>
        );
    }
}

ProjectTasks.propTypes = {
    project: PropTypes.shape({}),
};

ProjectTasks.defaultProps = {
    project: {},
};

export default connect(
    state => ({
        tasks: state.tasks,
    }),
)(ProjectTasks);
