import React, {useState} from 'react';
import {useAppDispatch} from "../hooks/redux";
import {addTask} from "../store/actions/tasksActions";

const TasksHeader: React.FC = () => {

    const [value, setValue] = useState<string>("")
    const dispatch = useAppDispatch()

    return (
        <>
            <h1 className="text-lg font-bold">All tasks</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch(addTask(value))
                setValue("")
            }} className="flex">
                <input
                className="w-full outline-0 px-2 py-1 rounded border-2 border-gray-500/20 my-2 focus:border-gray-500/60 transition-all"
                type="text"
                placeholder="Add a new task"
                value={value}
                onChange={event => setValue(event.target.value)}
                />
                <button className="px-2 my-2 ml-2 bg-blue-500 rounded text-white hover:bg-blue-600">
                    Add
                </button>
            </form>
            <hr className="mt-3 mb-6 border-gray-400"/>
        </>
    );
};

export default TasksHeader;