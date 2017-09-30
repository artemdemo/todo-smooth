import React from 'react';
import PropTypes from 'prop-types';

class CountRun extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.endCount = 0;
        this.animationStep = 0;
        this.animationTocken = null;
    }

    componentDidMount() {
        this.setState({
            count: Number(this.props.children),
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.children !== nextProps.children) {
            this.startTicking(Number(nextProps.children));
        }
    }

    startTicking(endCount) {
        if (this.animationTocken) {
            window.cancelAnimationFrame(this.animationTocken);
        }
        const { duration } = this.props;
        this.endCount = endCount;
        const stepsAmount = duration / 16;
        this.animationStep = (this.endCount - this.state.count) / stepsAmount;
        this.tick();
    }

    tick() {
        this.animationTocken = window.requestAnimationFrame(() => {
            const countRaw = this.state.count + this.animationStep;
            const count = this.animationStep > 0 ? Math.ceil(countRaw) : Math.floor(countRaw);
            if (
                (this.animationStep > 0 && count <= this.endCount) ||
                (this.animationStep < 0 && count >= this.endCount)
            ) {
                this.setState({
                    count,
                });
                this.tick();
            } else {
                this.setState({
                    count: this.endCount,
                });
            }
        });
    }

    render() {
        const { className } = this.props;
        return (
            <span className={className}>
                {this.state.count}
            </span>
        );
    }
}

CountRun.propTypes = {
    className: PropTypes.string,
    duration: PropTypes.number,
};

CountRun.defaultProps = {
    className: '',
    duration: 200,
};

export default CountRun;
