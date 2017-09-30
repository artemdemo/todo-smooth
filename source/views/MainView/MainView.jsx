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
import Project from '../../containers/Project/Project';
import Task from '../../containers/Task/Task';
import AddTaskBtn from '../../components/AddTaskBtn/AddTaskBtn';

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

    componentWillReceiveProps(nextProps) {
        if (this.props.projects.data !== nextProps.projects.data) {
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

    openModal(listId, projectEl) {
        const { projects, setCurrentProjectRect, toggleProjectModal } = this.props;
        setCurrentProjectRect(projectEl.getBoundingClientRect());
        this.setState({
            project: projects.data[listId],
        }, () => {
            toggleProjectModal();
        });
    }

    closeModal() {
        const { toggleProjectModal } = this.props;
        toggleProjectModal(false);
    }

    render() {
        const { user, projects, tasks, currentProject } = this.props;
        const today = moment();
        return (
            <div>
                <MainMenu />
                <UserGreeting user={user.data} />
                <div className='main-view-projects'>
                    <div className='main-view-projects__date'>
                        Today: {today.format('MMMM, DD YYYY')}
                    </div>
                    <Swiper
                        onChange={this.projectChanged.bind(this)}
                        onClick={this.openModal.bind(this)}
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
                    onClose={this.closeModal.bind(this)}
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
                    open={false}
                    onClose={null}
                >
                    <Task />
                </Modal>
                <AddTaskBtn open={currentProject.open} />
            </div>
        );
    }
}

export default connect(
    state => ({
        currentProject: state.currentProject,
        projects: state.projects,
        tasks: state.tasks,
        user: state.user,
    }), {
        setCurrentProjectId,
        setCurrentProjectRect,
        toggleProjectModal,
    },
)(MainView);
