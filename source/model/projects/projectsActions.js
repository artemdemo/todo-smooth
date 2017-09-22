import * as projectCons from './projectsConst';

export function setActiveProjectId(id) {
    return {
        type: projectCons.SET_ACTIVE_PROJECT_ID,
        id,
    };
}
