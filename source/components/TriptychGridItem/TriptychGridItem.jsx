import Preact from 'preact';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './TriptychGridItem.less';

const TriptychGridItem = (props) => {
    const { padded, centered, className } = props;
    const itemClass = classnames(className, {
        'triptych-grid-item': true,
        'triptych-grid-item_padded': padded,
        'triptych-grid-item_centered': centered,
    });
    return (
        <div className={itemClass}>
            {props.children}
        </div>
    );
};

TriptychGridItem.propTypes = {
    padded: PropTypes.bool,
    centered: PropTypes.bool,
    className: PropTypes.string,
};

TriptychGridItem.defaultProps = {
    padded: false,
    centered: false,
    className: '',
};

export default TriptychGridItem;
