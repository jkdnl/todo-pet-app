import React from 'react';
import {useAppDispatch} from "../hooks/redux";
import {addTask} from "../store/actions/tasksActions";
import TextInput from "./TextInput";
import useInput from "../hooks/useInput";

const TasksHeader: React.FC = () => {

    const {input: addInput, onChange: addHandler, resetValue} = useInput("")

    const dispatch = useAppDispatch()

    return (
        <>
            <h1 className="text-lg font-bold">All tasks</h1>
            <form className="flex" onSubmit={(e) => {
                e.preventDefault()
                if (addInput) {
                    dispatch(addTask(addInput))
                    resetValue()
                }
            }}>
                <TextInput
                    placeholder={"Add a new task..."}
                    value={addInput}
                    onChange={addHandler}
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