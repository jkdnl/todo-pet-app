import React, {useState} from 'react';
import {CheckIcon, PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import {completeTask, deleteTask, editTask} from "../store/actions/tasksActions";
import {useAppDispatch} from "../hooks/redux";
import {ITask} from "../models/ITask";

interface CardProps {
    task: ITask
}

const TaskCard: React.FC<CardProps> = ({task}) => {

    const [editing, setEditing] = useState<boolean>(false)
    const [value, setValue] = useState<string>(task.title)

    const dispatch = useAppDispatch()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, value: string) => {
        event.preventDefault()
        dispatch(editTask(task.id, value))
        setEditing(false)
    }

    return (
        <>
            <div className="border-2 rounded border-gray-500/20 p-2 flex justify-between items-center
            hover:border-blue-500
            transition-all">
                {!editing ? <h2>{task.title}</h2>
                    :
                    <form className="flex w-full" onSubmit={(e) => handleSubmit(e, value)}>
                        <input
                            value={value}
                            className="outline-0 w-full"
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button className="hover:text-green-600 hover:bg-white rounded p-1">
                            <CheckIcon className="w-5"/>
                        </button>
                    </form>
                }
                <div className="flex">
                    {!editing &&
                        <>
                            {!task.completed &&
                                <>
                                    <button onClick={() => dispatch(completeTask(task.id))}
                                         className="hover:text-green-600 hover:bg-white rounded p-1">
                                        <CheckIcon className="w-5"/>
                                    </button>
                                    <button onClick={() => setEditing(true)}
                                        className="hover:text-amber-400 hover:bg-white rounded p-1">
                                        <PencilIcon className="w-5"/>
                                    </button>
                                </>
                            }
                            <button onClick={() => dispatch(deleteTask(task.id))} className="hover:text-red-800 hover:bg-white rounded p-1">
                                <TrashIcon className="w-5" />
                            </button>
                        </>
                    }
                </div>
            </div>
            <hr className="my-3 border-gray-300"/>
        </>
    );
};

export default TaskCard;