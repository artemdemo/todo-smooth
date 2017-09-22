import Preact from 'preact';
import Color from 'color';
import { connect } from 'preact-redux';
import { createSelector } from 'reselect';

import './AppView.less';

const projectSelector = createSelector(
    props => props.projects,
    (projects) => {
        if (projects.activeProjectId !== null) {
            for (const project of projects.data) {
                if (project.id === projects.activeProjectId) {
                    return project;
                }
            }
        }
        return null;
    },
);

class AppView extends Preact.Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.projects !== nextProps.projects) {
            const project = projectSelector(nextProps);
            const color = Color(project.color);
            document.body.style.backgroundColor = project ? color.lighten(0.1).hex() : null;
        }
    }

    render(props) {
        return (
            <div>
                {props.children}
            </div>
        );
    }
}

export default connect(
    state => ({
        projects: state.projects,
    }),
)(AppView);
