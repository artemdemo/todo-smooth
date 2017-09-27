import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './TriptychGrid.less';

const TriptychGrid = (props) => {
    const { className } = props;
    const gridClass = classnames(className, {
        'triptych-grid': true,
    });
    return (
        <div className={gridClass}>
            {props.children}
        </div>
    );
};

TriptychGrid.propTypes = {
    className: PropTypes.string,
};

TriptychGrid.defaultProps = {
    className: '',
};

export default TriptychGrid;
