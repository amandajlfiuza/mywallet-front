import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import NewInflow from "./NewInflow";
import NewOutflow from "./NewOutflow";


export default function App() {
    const [token, setToken] = useState('');

    return (
        <UserContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/newinflow" element={<NewInflow />} />
                    <Route path="/newoutflow" element={<NewOutflow />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}