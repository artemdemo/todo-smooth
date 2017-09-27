import Preact from 'preact';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './LTText.less';

const LTText = (props) => {
    const { lineThrough, className } = props;
    const wrapClass = classnames(className, 'lt-text-wrap');
    const ltClass = classnames({
        'lt-text-line': true,
        'lt-text-line_show': lineThrough,
    });
    return (
        <div className={wrapClass}>
            <div className={ltClass} />
            {props.children}
        </div>
    );
};

LTText.propTypes = {
    lineThrough: PropTypes.bool,
    className: PropTypes.string,
};

LTText.defaultProps = {
    lineThrough: false,
    className: '',
};

export default LTText;
