import Preact from 'preact';
import Swiper from '../components/Swiper/Swiper';
import ProjectCard from '../components/ProjectCard/ProjectCard';

class MainView extends Preact.Component {
    componentWillMount() {
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        const projects = [
            {id: 0, name: 'Work', percentDone: 0.1},
            {id: 1, name: 'Personal', percentDone: 0.5},
            {id: 1, name: 'Vacation', percentDone: 0.9},
        ];
        return (
            <Swiper>
                {projects.map(project => (
                    <ProjectCard
                        name={project.name}
                        percentDone={project.percentDone}
                    />
                ))}
            </Swiper>
        );
    }
}

export default MainView;
