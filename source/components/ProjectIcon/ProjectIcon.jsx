import Preact from 'preact';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

import './ProjectIcon.less';

const ProjectIcon = (props) => {
    const { color, icon } = props;
    return (
        <div
            className='project-icon-wrap'
            style={{
                color,
            }}
        >
            <Icon
                className='project-icon-wrap__icon'
                name={icon}
            />
        </div>
    );
};

ProjectIcon.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
};

ProjectIcon.defaultProps = {
    color: null,
    icon: null,
};

export default ProjectIcon;
