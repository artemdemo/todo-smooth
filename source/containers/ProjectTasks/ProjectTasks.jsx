import Preact from 'preact';
import { connect } from 'preact-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';

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
    render(props) {
        console.log(tasksSelector(props));
        return (
            <div className='project-tasks'>

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
