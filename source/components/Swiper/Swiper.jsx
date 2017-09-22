import Preact from 'preact';
import SwiperPkg from 'swiper';

import './Swiper.less';

class Swiper extends Preact.Component {
    constructor(props) {
        super(props);

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
