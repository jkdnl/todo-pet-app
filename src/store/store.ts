import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksSlice"

const rootReducer = combineReducers({
    tasksReducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']