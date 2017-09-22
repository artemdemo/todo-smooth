import Preact from 'preact';
import { connect } from 'preact-redux';
import moment from 'moment';
import Swiper from '../../components/Swiper/Swiper';
import MainMenu from '../../components/MainMenu/MainMenu';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import UserGreeting from '../../components/UserGreeting/UserGreeting';
import { setActiveProjectId } from '../../model/projects/projectsActions';

import './MainView.less';

class MainView extends Preact.Component {
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
                        onChangeProject={this.projectChanged.bind(this)}
                    >
                        {projects.data.map(project => (
                            <ProjectCard
                                color={project.color}
                                name={project.name}
                                percentDone={project.percentDone}
                                icon={project.icon}
                            />
                        ))}
                    </Swiper>
                </div>
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
