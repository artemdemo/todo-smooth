import React from 'react';
import Color from 'color';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import './AppView.less';

const projectSelector = createSelector(
    props => props.projects,
    props => props.currentProject,
    (projects, currentProject) => {
        if (currentProject.projectId !== null) {
            for (const project of projects.data) {
                if (project.id === currentProject.projectId) {
                    return project;
                }
            }
        }
        return null;
    },
);

class AppView extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.currentProject !== nextProps.currentProject) {
            const project = projectSelector(nextProps);
            const color = Color(project.color);
            document.body.style.backgroundColor = project ? color.lighten(0.1).hex() : null;
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        projects: state.projects,
        currentProject: state.currentProject,
    }),
)(AppView);
