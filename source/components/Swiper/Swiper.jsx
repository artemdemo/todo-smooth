import Preact from 'preact';
import SwiperPkg from 'swiper';
import classnames from 'classnames';

import './Swiper.less';

class Swiper extends Preact.Component {
    constructor(props) {
        super(props);

        this.state = {
            showOverflow: false,
        };
        this.swiperEl = null;
        this.swiper = null;
    }

    componentDidMount() {
        this.swiper = new SwiperPkg(
            this.swiperEl,
            {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
            }
        );

        window.requestAnimationFrame(() => this.setState({
            showOverflow: true,
        }));
    }

    getRef(el) {
        this.swiperEl = el;
    }

    render(props, state) {
        const swiperClass = classnames({
            'swiper-container': true,
            'swiper-container_show-overflow': state.showOverflow,
        });
        return (
            <div
                ref={this.getRef.bind(this)}
                class={swiperClass}
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
