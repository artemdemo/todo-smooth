import Preact from 'preact';
import { connect } from 'preact-redux';
import Swiper from '../components/Swiper/Swiper';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import UserGreeting from '../components/UserGreeting/UserGreeting';

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
        return (
            <div>
                <UserGreeting user={user.data} />
                <Swiper>
                    {projects.map(project => (
                        <ProjectCard
                            name={project.name}
                            percentDone={project.percentDone}
                        />
                    ))}
                </Swiper>
            </div>
        );
    }
}

export default connect(
    state => ({
        user: state.user,
    }),
)(MainView);
