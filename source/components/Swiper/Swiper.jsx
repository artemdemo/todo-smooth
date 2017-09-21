import { h, Component } from 'preact';
import SwiperPkg from 'swiper';
import 'swiper/dist/css/swiper.min.css';

class Swiper extends Component {
    constructor(props) {
        super(props);

        this.swiperEl = null;
        this.swiper = null;
    }

    componentDidMount() {
        this.swiper = new SwiperPkg(
            this.swiperEl,
            {}
        );
    }

    getRef(el) {
        this.swiperEl = el;
    }

    render(props) {
        return (
            <div
                ref={this.getRef.bind(this)}
                class='swiper-container'
            >
                <div
                    class='swiper-wrapper'
                >
                    {props.children.map((item, index) => (
                        <div
                            class='swiper-slide'
                            key={`swiper-item-${index}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Swiper;
