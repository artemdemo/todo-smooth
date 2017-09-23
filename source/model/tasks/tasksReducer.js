const initState = {
    data: [
        {id: 0, name: 'Design Sprint', done: false},
        {id: 1, name: 'Icon set design for mobile app', done: false},
        {id: 2, name: 'HTML/CSS study', done: false},
        {id: 3, name: 'Weekly report', done: false},
        {id: 4, name: 'Prototyping', done: true},
        {id: 5, name: 'UX Conference', done: true},

        {id: 6, name: 'Buy milk', done: false},
        {id: 7, name: 'Walk dog', done: false},
        {id: 8, name: 'Buy tickets for tomorrow flight to France', done: false},
        {id: 9, name: 'Call mom', done: false},
        {id: 10, name: 'Find new apartment', done: true},
    ],
};

export default function tasksReducer(state = initState, action) {
    switch (action.type) {
        default:
            return state;
    }
};
