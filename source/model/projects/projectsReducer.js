import * as projectConst from './projectsConst';

const initState = {
    data: [
        {
            id: 0,
            name: 'Work',
            color: '#526aff',
            icon: 'briefcase',
            tasks: [0, 1, 2, 3, 4, 5],
        },
        {
            id: 1,
            name: 'Personal',
            color: '#ff7a43',
            icon: 'users',
            tasks: [6, 7, 8, 9, 10],
        },
        {
            id: 2,
            name: 'Vacation',
            color: '#3bcb3e',
            icon: 'sun-o',
            tasks: [],
        },
    ],
};

export default function projectReducer(state = initState, action) {
    switch (action.type) {
        case projectConst.REMOVE_TASK_FROM_PROJECT:
            let projectIndex = null;
            const project = state.data.find((project, index) => {
                if (project.id === action.projectId) {
                    projectIndex = index;
                    return true;
                }
                return false;
            });
            if (project) {
                const tasks = project.tasks.filter(taskId => taskId !== action.taskId);
                return Object.assign({}, state, {
                    data: [
                        ...state.data.slice(0, projectIndex),
                        Object.assign({}, project, {
                            tasks,
                        }),
                        ...state.data.slice(projectIndex + 1),
                    ],
                });
            }
            return state;
        default:
            return state;
    }
};
