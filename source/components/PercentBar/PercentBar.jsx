import Preact from 'preact';
import PropTypes from 'prop-types';

import './PercentBar.less';

const PercentBar = (props) => {
    const { percentAmount } = props;
    const percent = 100 * percentAmount;
    return (
        <div className='percent-bar'>
            <div className='percent-bar-scale'>
                <div
                    className='percent-bar-scale__fill'
                    style={{
                        width: `${percent}%`,
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
};

PercentBar.defaultProps = {
    percentAmount: 0,
};

export default PercentBar;
