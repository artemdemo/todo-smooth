import Preact from 'preact';
import PropTypes from 'prop-types';
import PercentBar from '../PercentBar/PercentBar';
import ProjectIcon from '../ProjectIcon/ProjectIcon';
import ProjectTitle from '../ProjectTitle/ProjectTitle';

import './ProjectHeader.less';

const ProjectHeader = (props) => {
    const { name, tasksAmount, percentDone, color, icon } = props;
    return (
        <div className='project-header'>
            <div className='project-card-header'>
                <ProjectIcon
                    color={color}
                    icon={icon}
                />
            </div>
            <ProjectTitle tasksAmount={tasksAmount}>
                {name}
            </ProjectTitle>
            <PercentBar
                color={color}
                percentAmount={percentDone}
            />
        </div>
    );
};

ProjectHeader.propTypes = {
    name: PropTypes.string,
    tasksAmount: PropTypes.number,
    percentDone: PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string,
};

ProjectHeader.defaultProps = {
    name: '',
    tasksAmount: 0,
    percentDone: 0,
    color: null,
    icon: null,
};

export default ProjectHeader;
