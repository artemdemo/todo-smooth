import Preact from 'preact';
import PropTypes from 'prop-types';
import { connect } from 'preact-redux';
import { createSelector } from 'reselect';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ProjectTasks from '../../components/ProjectTasks/ProjectTasks';

const projectSelector = createSelector(
    props => props.currentProject,
    props => props.projects,
    (currentProject, projects) => {
        for (const project of projects.data) {
            if (project.id === currentProject.projectId) {
                return project;
            }
        }
        return {};
    },
);

const doneTasksAmountSelector = createSelector(
    projectSelector,
    props => props.tasks,
    (project, tasks) => {
        return tasks.data.reduce((acc, task) => {
            if (project.tasks && project.tasks.includes(task.id) && task.done) {
                return acc + 1;
            }
            return acc;
        }, 0);
    }
);

class Project extends Preact.Component {
    render(props) {
        const { currentProject } = props;
        const project = projectSelector(props);
        const doneAmount = doneTasksAmountSelector(props);
        const percentDone = !project.tasks || project.tasks.length === 0 ?
            0 :
            doneAmount / project.tasks.length;
        return (
            <div>
                <ProjectHeader
                    color={project.color}
                    name={project.name}
                    percentDone={percentDone}
                    icon={project.icon}
                    tasksAmount={project.tasks.length - doneAmount}
                    open={currentProject.open}
                />
                <ProjectTasks
                    project={project}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        currentProject: state.currentProject,
        projects: state.projects,
        tasks: state.tasks,
    }),
)(Project);
