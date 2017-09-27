import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Icon.less';

const Icon = (props) => {
    const { name, className } = props;
    const iconClass = classnames(className, {
        fa: true,
        [`fa-${name}`]: true,
    });

    return (
        <span className={iconClass} />
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
};

Icon.defaultTypes = {
    className: '',
    name: '',
};

export default Icon;
