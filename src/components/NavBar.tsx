import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.removeItem("currentUser")
        navigate("/auth/login")
    }

    return (
        <div className="flex min-h-[5vh] p-4 items-center bg-blue-600 text-white justify-end">
            {
                localStorage.getItem("currentUser")
                    ? (
                        <button onClick={logoutHandler}>Log Out</button>
                    )
                    : (
                        <Link to={"/auth/login"}>
                            Login
                        </Link>
                    )
            }
        </div>
    );
};

export default NavBar;