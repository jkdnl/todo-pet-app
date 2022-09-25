import React, {useEffect} from 'react';
import TableWrapper from "../components/TableWrapper";
import {Outlet} from "react-router";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {

    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            navigate("/")
        }
    }, [])

    return (
        <TableWrapper>
            <Outlet />
        </TableWrapper>
    );
};

export default AuthPage;