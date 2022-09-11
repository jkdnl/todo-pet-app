import React from 'react';
import TableWrapper from "../components/TableWrapper";
import TasksHeader from "../components/TasksHeader";
import TaskCard from "../components/TaskCard";
import {useAppSelector} from "../hooks/redux";

const MainPage: React.FC = () => {

    const {tasks} = useAppSelector(state => state.tasksReducer)
    const noTasks = tasks.length === 0

    return (
        <TableWrapper>
            <TasksHeader />
            {tasks && tasks.map(task => <TaskCard key={task.id} task={task} />)}
            {noTasks && <h2 className="text-center">There are no tasks! Try setting some new ones.</h2>}
        </TableWrapper>
    );
};

export default MainPage;