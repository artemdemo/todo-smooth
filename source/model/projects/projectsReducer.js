import * as projectConst from './projectsConst';

const initState = {
    data: [
        {
            id: 0,
            name: 'Work',
            color: '#526aff',
            icon: 'briefcase',
        },
        {
            id: 1,
            name: 'Personal',
            color: '#ff7a43',
            icon: 'users',
        },
        {
            id: 2,
            name: 'Vacation',
            color: '#3bcb3e',
            icon: 'sun-o',
        },
    ],
};

export default function projectReducer(state = initState, action) {
    switch (action.type) {
        default:
            return state;
    }
};
