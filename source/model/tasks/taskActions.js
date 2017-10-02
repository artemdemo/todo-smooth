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

export function addTask(name) {
    return {
        type: taskConst.ADD_TASK,
        name,
    };
}
