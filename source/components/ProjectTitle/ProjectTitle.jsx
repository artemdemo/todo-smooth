import React from 'react';
import PropTypes from 'prop-types';

import './ProjectTitle.less';

const ProjectTitle = (props) => {
    const { tasksAmount } = props;
    return (
        <React.Fragment>
            <div className='project-title__amount'>
                {tasksAmount} tasks
            </div>
            <div className='project-title__name'>
                {props.children}
            </div>
        </React.Fragment>
    );
};

ProjectTitle.propTypes = {
    tasksAmount: PropTypes.number,
};

ProjectTitle.defaultProps = {
    tasksAmount: 0,
};

export default ProjectTitle;
