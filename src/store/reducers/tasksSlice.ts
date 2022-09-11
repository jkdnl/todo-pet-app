import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITask} from "../../models/ITask";

interface TasksState {
    tasks: ITask[],
    loading: boolean,
    error: string
}

const initialState: TasksState = {
    tasks: [
        {
            id: "1",
            userId: "1",
            title: "Upload the repo",
            completed: false
        },
        {
            id: "2",
            userId: "1",
            title: "Update github",
            completed: false
        }
    ],
    loading: false,
    error: ""
}

const TasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        fetchingTasks(state) {
            state.loading = true
            state.error = ""
        },
        fetchingTasksSuccess(state, action: PayloadAction<ITask[]>) {
            state.tasks = action.payload
            state.loading = false
            state.error = ""
        },
        fetchingTasksError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
        editingTask(state, action: PayloadAction<{id: string, value: string}>) {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? {...task, title: action.payload.value} : task)
        },
        completingTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.map(task => task.id === action.payload ? {...task, completed: true} : task)
        },
        deletingTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        addingTask(state, action: PayloadAction<string>) {
            const newTask = {
                userId: "1",
                id: `${Date.now()}`,
                title: action.payload,
                completed: false
            }
            state.tasks.push(newTask)
        }
    }
})

export default TasksSlice.reducer
export const {
    fetchingTasks,
    fetchingTasksSuccess,
    fetchingTasksError,
    editingTask,
    completingTask,
    deletingTask,
    addingTask
} = TasksSlice.actions