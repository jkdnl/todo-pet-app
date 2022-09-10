import React from 'react';

const TasksHeader = () => {
    return (
        <>
            <h1 className="text-lg font-bold">All tasks</h1>
            <div className="flex">
                <input
                className="w-full outline-0 px-2 py-1 rounded border-2 border-gray-500/20 my-2 focus:border-gray-500/60 transition-all"
                type="text"
                placeholder="Find an existing task"
                />
                <button className="px-2 my-2 ml-2 bg-blue-500 rounded text-white hover:bg-blue-600">
                    Add
                </button>
            </div>
            <hr className="mt-3 mb-6 border-gray-400"/>
        </>
    );
};

export default TasksHeader;