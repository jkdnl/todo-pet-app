import {AppDispatch} from "../store";
import {
    fetchingTasks,
    fetchingTasksError,
    fetchingTasksSuccess,
    editingTask,
    completingTask, deletingTask, addingTask
} from "../reducers/tasksSlice";
import axios from "axios";
import {ITask} from "../../models/ITask";

export const fetchTasks = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingTasks())
        const {data} = await axios.get<ITask[]>("")
        dispatch(fetchingTasksSuccess(data))
    } catch (e) {
        dispatch(fetchingTasksError(e as Error))
    }
}

export const editTask = (id: string, value: string) => (dispatch: AppDispatch) => {
    dispatch(editingTask({id, value}))
}

export const completeTask = (id: string) => (dispatch: AppDispatch) => {
    dispatch(completingTask(id))
}

export const deleteTask = (id: string) => (dispatch: AppDispatch) => {
    dispatch(deletingTask(id))
}

export const addTask = (value: string) => (dispatch: AppDispatch) => {
    dispatch(addingTask(value))
}
