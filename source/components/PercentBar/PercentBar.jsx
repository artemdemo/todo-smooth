import Preact from 'preact';
import PropTypes from 'prop-types';

import './PercentBar.less';

const PercentBar = (props) => {
    const { percentAmount, color } = props;
    const percent = 100 * percentAmount;
    return (
        <div className='percent-bar'>
            <div className='percent-bar-scale'>
                <div
                    className='percent-bar-scale__fill'
                    style={{
                        width: `${percent}%`,
                        backgroundColor: color,
                    }}
                />
            </div>
            <div className='percent-bar__amount'>
                {Math.ceil(percent)}%
            </div>
        </div>
    );
};

PercentBar.propTypes = {
    percentAmount: PropTypes.number,
    color: PropTypes.string,
};

PercentBar.defaultProps = {
    percentAmount: 0,
    color: null,
};

export default PercentBar;
