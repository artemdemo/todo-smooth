import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Swiper from '../../components/Swiper/Swiper';
import MainMenu from '../../components/MainMenu/MainMenu';
import UserGreeting from '../../components/UserGreeting/UserGreeting';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import Modal from '../../components/Modal/Modal';
import {
    setCurrentProjectId,
    setCurrentProjectRect,
    toggleProjectModal,
} from '../../model/currentProject/currentProjectActions';
import {
    toggleTaskModal,
    updateTaskName,
    setTaskNameError,
} from '../../model/currentTask/currentTaskActions';
import {
    addTask,
} from '../../model/tasks/taskActions';
import {
    addTaskToProject,
} from '../../model/projects/projectActions';
import Project from '../../containers/Project/Project';
import Task from '../../containers/Task/Task';
import AddTaskBtn from '../../components/AddTaskBtn/AddTaskBtn';
import { generateId } from '../../services/id';

import './MainView.less';

class MainView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {},
        };
    }

    componentWillMount() {
        const { projects } = this.props;
        if (projects.data.length > 0) {
            this.projectChanged(0);
        }
    }

    projectChanged(listId) {
        const { projects, setCurrentProjectId } = this.props;
        const project = projects.data[listId];
        if (project) {
            setCurrentProjectId(project.id);
        }
    }

    openProjectModal(listId, projectEl) {
        const { projects, setCurrentProjectRect, toggleProjectModal } = this.props;
        setCurrentProjectRect(projectEl.getBoundingClientRect());
        this.setState({
            project: projects.data[listId],
        }, () => {
            toggleProjectModal();
        });
    }

    closeProjectModal() {
        const { toggleProjectModal } = this.props;
        toggleProjectModal(false);
    }

    openSaveTask() {
        const {
            toggleTaskModal,
            currentTask,
            currentProject,
            addTask,
            addTaskToProject,
            setTaskNameError,
            updateTaskName,
        } = this.props;
        if (currentTask.name !== '') {
            const taskId = generateId();
            addTask(taskId, currentTask.name);
            addTaskToProject(currentProject.projectId, taskId);
            toggleTaskModal(false);
            setTaskNameError(false);
            updateTaskName('');
        } else if (currentTask.open && currentTask.name === '') {
            setTaskNameError(true);
        } else {
            toggleTaskModal(true);
        }
    }

    closeTask() {
        const { toggleTaskModal, updateTaskName } = this.props;
        toggleTaskModal(false);
        updateTaskName('');
    }

    render() {
        const { user, projects, tasks, currentProject, currentTask } = this.props;
        const today = moment();
        return (
            <React.Fragment>
                <MainMenu />
                <UserGreeting user={user.data} />
                <div className='main-view-projects'>
                    <div className='main-view-projects__date'>
                        Today: {today.format('MMMM, DD YYYY')}
                    </div>
                    <Swiper
                        onChange={this.projectChanged.bind(this)}
                        onClick={this.openProjectModal.bind(this)}
                    >
                        {projects.data.map((project, index) => {
                            const doneAmount = tasks.data.reduce((acc, task) => {
                                if (project.tasks.includes(task.id) && task.done) {
                                    return acc + 1;
                                }
                                return acc;
                            }, 0);
                            const percentDone = project.tasks.length === 0 ? 0 : doneAmount / project.tasks.length;
                            return (
                                <ProjectHeader
                                    tasksAmount={project.tasks.length - doneAmount}
                                    color={project.color}
                                    name={project.name}
                                    percentDone={percentDone}
                                    icon={project.icon}
                                    key={`main-view-swiper-item-${index}`}
                                />
                            )
                        })}
                    </Swiper>
                </div>
                <Modal
                    rect={currentProject.rect}
                    open={currentProject.open}
                    buttons={{
                        left: {
                            icon: 'arrow-left',
                            onClick: this.closeProjectModal.bind(this),
                        },
                        right: {
                            icon: 'ellipsis-v',
                            onClick: null,
                        },
                    }}
                >
                    <Project />
                </Modal>
                <Modal
                    rect={{
                        top: '100%',
                        left: '0',
                        width: '100%',
                        height: '1px',
                    }}
                    open={currentTask.open}
                    caption='New Task'
                    buttons={{
                        left: {
                            icon: 'times',
                            onClick: this.closeTask.bind(this),
                        },
                        right: {
                            icon: null,
                            onClick: null,
                        },
                    }}
                >
                    <Task />
                </Modal>
                <AddTaskBtn
                    onClick={this.openSaveTask.bind(this)}
                    isSaving={currentTask.open}
                    open={currentProject.open}
                />
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        currentProject: state.currentProject,
        currentTask: state.currentTask,
        projects: state.projects,
        tasks: state.tasks,
        user: state.user,
    }), {
        setCurrentProjectId,
        setCurrentProjectRect,
        toggleProjectModal,
        toggleTaskModal,
        updateTaskName,
        setTaskNameError,
        addTask,
        addTaskToProject,
    },
)(MainView);
