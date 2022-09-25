import React from 'react';
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<MainPage />} />
                <Route path={"auth"} element={<AuthPage />}>
                    <Route path={"login"} element={<LoginForm />} />
                    <Route path={"register"} element={<RegisterForm />} />
                </Route>
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
