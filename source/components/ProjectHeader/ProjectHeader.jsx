import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PercentBar from '../PercentBar/PercentBar';
import ProjectIcon from '../ProjectIcon/ProjectIcon';
import ProjectTitle from '../ProjectTitle/ProjectTitle';

import './ProjectHeader.less';

class ProjectHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, tasksAmount, percentDone, color, icon, open } = this.props;
        const iconClass = classnames({
            'project-header-icon': true,
            'project-header-icon_open': open,
        });
        return (
            <React.Fragment>
                <div className={iconClass}>
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
            </React.Fragment>
        );
    }
}

ProjectHeader.propTypes = {
    name: PropTypes.string,
    tasksAmount: PropTypes.number,
    percentDone: PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string,
    open: PropTypes.bool,
};

ProjectHeader.defaultProps = {
    name: '',
    tasksAmount: 0,
    percentDone: 0,
    color: null,
    icon: null,
    open: false,
};

export default ProjectHeader;
