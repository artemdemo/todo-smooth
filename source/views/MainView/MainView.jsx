import Preact from 'preact';
import { connect } from 'preact-redux';
import moment from 'moment';
import Swiper from '../../components/Swiper/Swiper';
import MainMenu from '../../components/MainMenu/MainMenu';
import UserGreeting from '../../components/UserGreeting/UserGreeting';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import {
    setCurrentProjectId,
    setCurrentProjectRect,
    toggleProjectModal,
} from '../../model/currentProject/currentProjectActions';

import './MainView.less';

class MainView extends Preact.Component {
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

    render(props) {
        const { user, projects, currentProject } = props;
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
                        {projects.data.map((project, index) => (
                            <ProjectHeader
                                color={project.color}
                                name={project.name}
                                percentDone={0.1}
                                icon={project.icon}
                                key={`main-view-swiper-item-${index}`}
                            />
                        ))}
                    </Swiper>
                </div>
                <ProjectModal
                    project={this.state.project}
                    rect={currentProject.rect}
                    open={currentProject.open}
                    onClose={this.closeModal.bind(this)}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        currentProject: state.currentProject,
        projects: state.projects,
        user: state.user,
    }), {
        setCurrentProjectId,
        setCurrentProjectRect,
        toggleProjectModal,
    },
)(MainView);
