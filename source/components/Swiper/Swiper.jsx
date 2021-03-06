import React from 'react';
import SwiperPkg from 'swiper';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';

import './Swiper.less';

class Swiper extends React.Component {
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

        setTimeout(() => this.setState({
            showOverflow: true,
        }), 50);
    }

    getRef(el) {
        this.swiperEl = el;
    }

    touchEnd() {
        const { onChange } = this.props;
        setTimeout(() => {
            onChange && onChange(this.swiper.activeIndex);
        }, 50);
    }

    projectClick() {
        const { onClick } = this.props;
        onClick && onClick(this.swiper.activeIndex, this.swiper.slides[this.swiper.activeIndex]);
    }

    render() {
        const swiperClass = classnames({
            'swiper-container': true,
            'swiper-container_show-overflow': this.state.showOverflow,
        });
        return (
            <div
                ref={this.getRef.bind(this)}
                className={swiperClass}
                onTouchEnd={this.touchEnd.bind(this)}
                onMouseUp={this.touchEnd.bind(this)}
            >
                <div
                    className='swiper-wrapper'
                >
                    {this.props.children.map((item, index) => (
                        <div
                            className='swiper-slide'
                            onClick={this.projectClick.bind(this)}
                            key={`swiper-item-${index}`}
                        >
                            <Card>
                                {item}
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

Swiper.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
};

Swiper.defaultProps = {
    onChange: null,
    onClick: null,
};

export default Swiper;
