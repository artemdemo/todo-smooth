import * as projectConst from './projectsConst';

export function removeTaskFromProject(projectId, taskId) {
    return {
        type: projectConst.REMOVE_TASK_FROM_PROJECT,
        projectId,
        taskId,
    }
}
