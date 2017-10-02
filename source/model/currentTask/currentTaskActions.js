import * as currentTaskConst from './currentTaskConst';

export function setCurrentTaskId(taskId) {
    return {
        type: currentTaskConst.SET_CURRENT_TASK_ID,
        taskId,
    };
}

export function updateTaskName(name) {
    return {
        type: currentTaskConst.UPDATE_TASK_NAME,
        name,
    };
}

export function toggleTaskModal(open) {
    return {
        type: currentTaskConst.TOGGLE_TASK_MODAL,
        open,
    }
}
