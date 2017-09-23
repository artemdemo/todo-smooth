import * as currentProjectConst from './currentProjectConst';

export function setCurrentProjectId(projectId) {
    return {
        type: currentProjectConst.SET_CURRENT_PROJECT_ID,
        projectId,
    };
}

export function setCurrentProjectRect(rect) {
    return {
        type: currentProjectConst.SET_CURRENT_PROJECT_RECT,
        rect,
    };
}

export function clearCurrentProject() {
    return {
        type: currentProjectConst.CLEAR_CURRENT_PROJECT,
    };
}
