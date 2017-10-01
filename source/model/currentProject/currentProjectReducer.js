import * as currentProjectConst from './currentProjectConst';

const initState = {
    projectId: null,
    rect: {},
    open: false,
};

export default function (state = initState, action) {
    switch (action.type) {
        case currentProjectConst.SET_CURRENT_PROJECT_ID:
            return Object.assign({}, state, {
                projectId: action.projectId,
            });
        case currentProjectConst.SET_CURRENT_PROJECT_RECT:
            const {top, right, bottom, left, width, height, x, y} = action.rect;
            return Object.assign({}, state, {
                rect: {top, right, bottom, left, width, height, x, y},
            });
        case currentProjectConst.TOGGLE_PROJECT_MODAL:

            return Object.assign({}, state, {
                open: action.open !== undefined ? action.open : !state.open,
            });
        default:
            return state;
    }
}
