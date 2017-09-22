const initState = {
    data: {
        name: 'Alex',
    },
};

export default function userReducer(state = initState, action) {
    switch (action.type) {
        default:
            return state;
    }
};
