import Preact from 'preact';
import PropTypes from 'prop-types';
import PercentBar from '../PercentBar/PercentBar';
import Icon from '../Icon/Icon';

import './ProjectCard.less';

class ProjectCard extends Preact.Component {
    render (props) {
        const { name, tasksAmount, percentDone, color, icon } = props;
        return (
            <div className='project-card'>
                <div className='project-card-header'>
                    <div
                        className='project-card-icon-wrap'
                        style={{
                            color,
                        }}
                    >
                        <Icon
                            className='project-card-icon-wrap__icon'
                            name={icon}
                        />
                    </div>
                </div>
                <div className='project-card__amount'>
                    {tasksAmount} tasks
                </div>
                <div className='project-card__name'>
                    {name}
                </div>
                <PercentBar
                    color={color}
                    percentAmount={percentDone}
                />
            </div>
        );
    }
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    tasksAmount: PropTypes.number,
    percentDone: PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string,
};

ProjectCard.defaultProps = {
    name: '',
    tasksAmount: 0,
    percentDone: 0,
    color: null,
    icon: null,
};

export default ProjectCard;
