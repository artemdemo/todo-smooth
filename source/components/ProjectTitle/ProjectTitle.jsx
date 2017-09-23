import Preact from 'preact';
import PropTypes from 'prop-types';

import './ProjectTitle.less';

const ProjectTitle = (props) => {
    const { tasksAmount } = props;
    return (
        <div>
            <div className='project-title__amount'>
                {tasksAmount} tasks
            </div>
            <div className='project-title__name'>
                {props.children}
            </div>
        </div>
    );
};

ProjectTitle.propTypes = {
    tasksAmount: PropTypes.number,
};

ProjectTitle.defaultProps = {
    tasksAmount: 0,
};

export default ProjectTitle;
