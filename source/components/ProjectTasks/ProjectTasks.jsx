import Preact from 'preact';
import { connect } from 'preact-redux';
import PropTypes from 'prop-types';

class ProjectTasks extends Preact.Component {
    render(props) {
        const { project } = props;
        return (
            <div className='project-tasks'>

            </div>
        );
    }
}

ProjectTasks.propTypes = {
    project: PropTypes.shape({}),
};

ProjectTasks.defaultProps = {
    project: {},
};

export default connect(
    state => ({
        tasks: state.tasks,
    }),
)(ProjectTasks);
