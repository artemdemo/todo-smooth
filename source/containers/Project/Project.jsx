import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ProjectTasks from '../ProjectTasks/ProjectTasks';

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

class Project extends React.Component {
    render() {
        const { currentProject } = this.props;
        const project = projectSelector(this.props);
        const doneAmount = doneTasksAmountSelector(this.props);
        const percentDone = !project.tasks || project.tasks.length === 0 ?
            0 :
            doneAmount / project.tasks.length;
        return (
            <React.Fragment>
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
                    open={currentProject.open}
                />
            </React.Fragment>
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
