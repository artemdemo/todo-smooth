import * as tasksConst from './tasksConst';

const initState = {
    data: [
        {id: '0', name: 'Design Sprint', done: false},
        {id: '1', name: 'Icon set design for mobile app', done: false},
        {id: '2', name: 'HTML/CSS study', done: false},
        {id: '3', name: 'Weekly report', done: false},
        {id: '4', name: 'Prototyping', done: true},
        {id: '5', name: 'UX Conference', done: true},

        {id: '6', name: 'Buy milk', done: false},
        {id: '7', name: 'Walk dog', done: false},
        {id: '8', name: 'Buy tickets for tomorrow flight to France', done: false},
        {id: '9', name: 'Call mom', done: false},
        {id: '10', name: 'Find new apartment', done: true},
    ],
};

export default function tasksReducer(state = initState, action) {
    switch (action.type) {
        case tasksConst.TOGGLE_DONE:
            return Object.assign({}, state, {
                data: state.data.map((task) => {
                    if (task.id === action.id) {
                        return Object.assign({}, task, {done: !task.done});
                    }
                    return task;
                }),
            });
        case tasksConst.DELETE_TASK:
            return Object.assign({}, state, {
                data: state.data.filter(task => {
                    return task.id !== action.id;
                }),
            });
        case tasksConst.ADD_TASK:
            return Object.assign({}, state, {
                data: [
                    ...state.data,
                    {
                        id: action.id,
                        name: action.name,
                    }
                ],
            });
        default:
            return state;
    }
};
