const initState = {
    data: [
        {
            id: 0,
            name: 'Work',
            percentDone: 0.1,
            color: '#526aff',
            icon: 'briefcase',
        },
        {
            id: 1,
            name: 'Personal',
            percentDone: 0.5,
            color: '#ff7a43',
            icon: 'users',
        },
        {
            id: 2,
            name: 'Vacation',
            percentDone: 0.9,
            color: '#3bcb3e',
            icon: 'sun-o',
        },
    ],
    activeProject: null,
};

export default function projectReducer(state = initState, action) {
    switch (action.type) {
        default:
            return state;
    }
};
