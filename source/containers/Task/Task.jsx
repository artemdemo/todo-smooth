import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Input from '../../components/Input/Input';
import { updateTaskName } from '../../model/currentTask/currentTaskActions';

import './Task.less';

const taskSelector = createSelector(
    props => props.currentTask,
    props => props.tasks,
    (currentTask, tasks) => tasks.data
        .find(task => task.id === currentTask.taskId),
);

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: null,
        };
    }

    componentDidMount() {
        const task = taskSelector(this.props);
        this.setState({
            task: task || null,
        })
    }

    componentWillReceiveProps(nextProps) {
        const currentTaskChanged = this.props.currentTask !== nextProps.currentTask;
        const tasksChanged = this.props.tasks !== nextProps.tasks;
        if (currentTaskChanged || tasksChanged) {
            const task = taskSelector(this.props);
            this.setState({
                task: task || null,
            })
        }
    }

    updateTaskName(name) {
        const { updateTaskName } = this.props;
        updateTaskName(name);
    }

    render() {
        const { currentTask } = this.props;
        return (
            <div>
                <div className='task-name-description'>
                    What are you planning to do?
                </div>
                <Input
                    placeholder='Task name'
                    value={currentTask.name}
                    error={currentTask.nameError}
                    onChange={this.updateTaskName.bind(this)}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        currentTask: state.currentTask,
        tasks: state.tasks,
    }), {
        updateTaskName,
    },
)(Task);
