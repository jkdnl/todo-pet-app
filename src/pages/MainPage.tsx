import React from 'react';
import TableWrapper from "../components/TableWrapper";
import TasksHeader from "../components/TasksHeader";
import TaskCard from "../components/TaskCard";
import {useAppSelector} from "../hooks/redux";

const MainPage = () => {

    const {tasks} = useAppSelector(state => state.tasksReducer)

    return (
        <TableWrapper>
            <TasksHeader />
            {tasks && tasks.map(task => <TaskCard key={task.id} title={task.title} />)}
        </TableWrapper>
    );
};

export default MainPage;