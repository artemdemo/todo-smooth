import * as taskConst from './tasksConst';

export function toggleTaskDone(id) {
    return {
        type: taskConst.TOGGLE_DONE,
        id,
    };
}

export function deleteTask(id) {
    return {
        type: taskConst.DELETE_TASK,
        id,
    };
}
