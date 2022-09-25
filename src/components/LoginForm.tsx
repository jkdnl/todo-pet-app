import React, {useState} from 'react';
import TextInput from "./TextInput";
import useInput from "../hooks/useInput";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import IUser from "../models/IUser";

const LoginForm = () => {

    const {input: emailValue, onChange: emailHandler} = useInput("")
    const {input: passwordValue, onChange: passwordHandler} = useInput("")
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setError(null)
            const {data} = await axios.get<IUser[]>("http://localhost:3000/users", {
                params: {
                    email: emailValue,
                    password: passwordValue
                }
            })
            if (data) {
                localStorage.setItem("currentUser", `${data[0].id}`)
            }
            navigate("/")
        } catch (e) {
            console.error(e)
            setError("Either email or password are incorrect")
        }
    }

    return (
        <form className="flex flex-col sm:w-[70%] mx-auto mt-6 border-gray-300 border rounded p-6" onSubmit={submitHandler}>
            <h2 className="text-center text-xl mb-4">Log into your Account</h2>
            {
                error ? <p className="text-red-600 text-center mb-3">{error}</p> : null
            }
            <div>Email</div>
            <TextInput placeholder={"Enter your email..."} value={emailValue} onChange={emailHandler} type={"email"} />
            <div>Password</div>
            <TextInput placeholder={"Enter your email..."} value={passwordValue} onChange={passwordHandler} type={"password"} />
            <button className="bg-blue-600 text-center text-white p-2 w-20 rounded my-4 mx-auto" type="submit">Log In</button>
            <p className="text-center">Do not have an account yet?</p>
            <Link className="text-center text-blue-600" to={"/auth/register"}>Register</Link>
        </form>
    );
};

export default LoginForm;