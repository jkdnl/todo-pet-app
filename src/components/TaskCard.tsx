import React from 'react';
import {CheckIcon, TrashIcon} from "@heroicons/react/24/outline";

interface CardProps {
    title: string
}

const TaskCard: React.FC<CardProps> = ({title}) => {
    return (
        <>
            <div className="border-2 rounded border-gray-500/20 p-2 flex justify-between items-center
            hover:border-blue-500 hover:bg-blue-500 hover:text-white
            transition-all">
                <h2>{title}</h2>
                <div>
                    <button className="hover:text-green-600 hover:bg-white rounded p-1">
                        <CheckIcon className="w-5" />
                    </button>
                    <button className="hover:text-red-800 hover:bg-white rounded p-1">
                        <TrashIcon className="w-5" />
                    </button>
                </div>
            </div>
            <hr className="my-3 border-gray-300"/>
        </>
    );
};

export default TaskCard;