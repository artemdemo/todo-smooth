import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Input from '../../components/Input/Input';

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

    render() {
        return (
            <div>
                <Input placeholder='Task name' />
            </div>
        );
    }
}

export default connect(
    state => ({
        currentTask: state.currentTask,
        tasks: state.tasks,
    }),
)(Task);
