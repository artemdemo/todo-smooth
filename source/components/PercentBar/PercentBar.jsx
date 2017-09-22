import Preact from 'preact';
import PropTypes from 'prop-types';

import './PercentBar.less';

const PercentBar = (props) => {
    const { percentAmount } = props;
    const percent = 100 * percentAmount;
    return (
        <div class='percent-bar'>
            <div class='percent-bar-scale'>
                <div
                    class='percent-bar-scale__fill'
                    style={{
                        width: `${percent}%`,
                    }}
                />
            </div>
            <div class='percent-bar__amount'>
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
