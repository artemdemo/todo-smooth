import Preact from 'preact';
import { connect } from 'preact-redux';
import moment from 'moment';
import Swiper from '../../components/Swiper/Swiper';
import MainMenu from '../../components/MainMenu/MainMenu';
import UserGreeting from '../../components/UserGreeting/UserGreeting';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import { setActiveProjectId } from '../../model/projects/projectsActions';

import './MainView.less';

class MainView extends Preact.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: null,
            projectEl: null,
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
        const { projects, setActiveProjectId } = this.props;
        const project = projects.data[listId];
        if (project) {
            setActiveProjectId(project.id);
        }
    }

    openProject(listId, projectEl) {
        const { projects } = this.props;
        const project = projects.data[listId];
        this.setState({
            project,
            projectEl,
        });
    }

    render(props) {
        const { user, projects } = props;
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
                        onClick={this.openProject.bind(this)}
                    >
                        {projects.data.map((project, index) => (
                            <ProjectHeader
                                color={project.color}
                                name={project.name}
                                percentDone={project.percentDone}
                                icon={project.icon}
                                key={`main-view-swiper-item-${index}`}
                            />
                        ))}
                    </Swiper>
                </div>
                <ProjectModal
                    project={this.state.project}
                    projectEl={this.state.projectEl}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        projects: state.projects,
        user: state.user,
    }), {
        setActiveProjectId,
    },
)(MainView);
