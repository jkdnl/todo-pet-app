import {AppDispatch} from "../store";
import {fetchingTasks, fetchingTasksError, fetchingTasksSuccess} from "../reducers/tasksSlice";
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