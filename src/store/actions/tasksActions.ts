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
        const {data} = await axios.get<ITask[]>("http://localhost:3000/tasks", {
            params: {
                userId: localStorage.getItem("currentUser")
            }
        })
        dispatch(fetchingTasksSuccess(data))
    } catch (e) {
        dispatch(fetchingTasksError(e as Error))
    }
}

export const editTask = (id: string, value: string) => async (dispatch: AppDispatch) => {
    try {
        await axios.patch(`http://localhost:3000/tasks/${id}`, {
            title: value
        } as ITask)
        dispatch(editingTask({id, value}))
    } catch (e) {
        console.log(e)
    }
}

export const completeTask = (id: string) => async (dispatch: AppDispatch) => {
    try {
        await axios.patch(`http://localhost:3000/tasks/${id}`, {
            completed: true
        } as ITask)
        dispatch(completingTask(id))
    } catch (e) {
        console.log(e)
    }
}

export const deleteTask = (id: string) => async (dispatch: AppDispatch) => {
    try {
        await axios.delete(`http://localhost:3000/tasks/${id}`)
        dispatch(deletingTask(id))
    } catch (e) {
        console.log(e)
    }
}

export const addTask = (title: string) => async (dispatch: AppDispatch) => {
    try {
        const id = new Date().toISOString()
        await axios.post(`http://localhost:3000/tasks`, {
            userId: localStorage.getItem("currentUser"),
            title: title,
            completed: false,
            id: id
        } as ITask)
        dispatch(addingTask({id, title}))
    } catch (e) {
        console.log(e)
    }
}
