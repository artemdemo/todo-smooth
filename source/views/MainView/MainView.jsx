import Preact from 'preact';
import { connect } from 'preact-redux';
import moment from 'moment';
import Swiper from '../../components/Swiper/Swiper';
import MainMenu from '../../components/MainMenu/MainMenu';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import UserGreeting from '../../components/UserGreeting/UserGreeting';

import './MainView.less';

class MainView extends Preact.Component {
    componentWillMount() {
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render(props) {
        const { user } = props;
        const projects = [
            {id: 0, name: 'Work', percentDone: 0.1},
            {id: 1, name: 'Personal', percentDone: 0.5},
            {id: 1, name: 'Vacation', percentDone: 0.9},
        ];
        const today = moment();
        return (
            <div>
                <MainMenu />
                <UserGreeting user={user.data} />
                <div className='main-view-projects'>
                    <div className='main-view-projects__date'>
                        Today: {today.format('MMMM, DD YYYY')}
                    </div>
                    <Swiper>
                        {projects.map(project => (
                            <ProjectCard
                                name={project.name}
                                percentDone={project.percentDone}
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
        user: state.user,
    }),
)(MainView);
