import React, {useState} from 'react';
import TextInput from "./TextInput";
import useInput from "../hooks/useInput";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import IUser from "../models/IUser";

const RegisterForm = () => {

    const {input: emailValue, onChange: emailHandler} = useInput("")
    const {input: passwordValue, onChange: passwordHandler} = useInput("")

    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const user = {
                email: emailValue,
                password: passwordValue,
            }
            const checkUser = await axios.get<IUser[]>("http://localhost:3000/users", {
                params: {
                    email: emailValue
                }
            })
            console.log(checkUser)
            if (!checkUser.data[0]) {
                const {data} = await axios.post<IUser[]>("http://localhost:3000/users", user)
                if (data) {
                    localStorage.setItem("currentUser", `${data[0].id}`)
                }
            } else {
                throw new Error("User already exists")
            }
            navigate("/")
        } catch (e) {
            console.log(e)
            setError("Something went wrong...")
        }
    }

    return (
        <form className="flex flex-col sm:w-[70%] mx-auto mt-6 border-gray-300 border rounded p-6" onSubmit={submitHandler}>
            <h2 className="text-center text-xl mb-4">Create an Account</h2>
            {
                error ? <p className="text-red-600 text-center mb-3">{error}</p> : null
            }
            <div>Email</div>
            <TextInput placeholder={"Enter your email..."} value={emailValue} onChange={emailHandler} type={"email"} />
            <div>Password</div>
            <TextInput placeholder={"Enter your email..."} value={passwordValue} onChange={passwordHandler} type={"password"} />
            <button className="bg-blue-600 text-center text-white p-2 w-20 rounded my-4 mx-auto" type="submit">Sign Up</button>
            <p className="text-center">Already have an account?</p>
            <Link className="text-center text-blue-600" to={"/auth/login"}>Log In</Link>
        </form>
    );
};

export default RegisterForm;