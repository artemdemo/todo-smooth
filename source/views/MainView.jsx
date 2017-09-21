import { h, Component } from 'preact';
import Swiper from '../components/Swiper/Swiper';

class MainView extends Component {
    componentWillMount() {
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <Swiper>
                <span>Slide #01</span>
                <span>Slide #02</span>
                <span>Slide #03</span>
            </Swiper>
        );
    }
}

export default MainView;
