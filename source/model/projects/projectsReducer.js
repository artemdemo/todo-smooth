import * as projectConst from './projectsConst';
import { createSelector } from 'reselect';

const initState = {
    data: [
        {
            id: '0',
            name: 'Work',
            color: '#526aff',
            icon: 'briefcase',
            tasks: ['0', '1', '2', '3', '4', '5'],
        },
        {
            id: '1',
            name: 'Personal',
            color: '#ff7a43',
            icon: 'users',
            tasks: ['6', '7', '8', '9', '10'],
        },
        {
            id: '2',
            name: 'Vacation',
            color: '#3bcb3e',
            icon: 'sun-o',
            tasks: [],
        },
    ],
};

const getProject = (projects, projectId) => {
    let projectIndex = null;
    const project = projects.find((project, index) => {
        if (project.id === projectId) {
            projectIndex = index;
            return true;
        }
        return false;
    });
    return {
        index: projectIndex,
        project,
    };
};

export default function projectReducer(state = initState, action) {
    switch (action.type) {
        case projectConst.REMOVE_TASK_FROM_PROJECT:
            const removeData = getProject(state.data, action.projectId);
            if (removeData.project) {
                const tasks = removeData.project.tasks.filter(taskId => taskId !== action.taskId);
                return Object.assign({}, state, {
                    data: [
                        ...state.data.slice(0, removeData.index),
                        Object.assign({}, removeData.project, {
                            tasks,
                        }),
                        ...state.data.slice(removeData.index + 1),
                    ],
                });
            }
            return state;
        case projectConst.ADD_TASK_TO_PROJECT:
            const addData = getProject(state.data, action.projectId);
            if (addData.project) {
                const tasks = [
                    ...addData.project.tasks,
                    action.taskId,
                ];
                return Object.assign({}, state, {
                    data: [
                        ...state.data.slice(0, addData.index),
                        Object.assign({}, addData.project, {
                            tasks,
                        }),
                        ...state.data.slice(addData.index + 1),
                    ],
                });
            }
            return state;
        default:
            return state;
    }
};
