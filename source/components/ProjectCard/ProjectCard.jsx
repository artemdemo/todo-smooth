import Preact from 'preact';
import PropTypes from 'prop-types';
import PercentBar from '../PercentBar/PercentBar';

import './ProjectCard.less';

class ProjectCard extends Preact.Component {
    render (props) {
        const { name, tasksAmount, percentDone } = props;
        return (
            <div class='project-card'>
                <div class='project-card__amount'>
                    {tasksAmount} tasks
                </div>
                <div class='project-card__name'>
                    {name}
                </div>
                <PercentBar percentAmount={percentDone} />
            </div>
        );
    }
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    tasksAmount: PropTypes.number,
    percentDone: PropTypes.number,
};

ProjectCard.defaultProps = {
    name: '',
    tasksAmount: 0,
    percentDone: 0,
};

export default ProjectCard;
