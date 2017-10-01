import * as currentTaskConst from './currentTaskConst';

const initState = {
    taskId: null,
    rect: {},
    open: false,
};

export default function (state = initState, action) {
    switch (action.type) {
        case currentTaskConst.SET_CURRENT_TASK_ID:
            return Object.assign({}, state, {
                taskId: action.taskId,
            });
        case currentTaskConst.TOGGLE_TASK_MODAL:
            return Object.assign({}, state, {
                open: action.open !== undefined ? action.open : !state.open,
            });
        default:
            return state;
    }
}
