import React, { useContext } from "react";
import './App.css';
import { UserContext } from '../context/Runner';


function Coaches({ coahces, setCoaches }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

        return (
            <div>{currentUser.full_name}</div>
    )
}

export default Coaches;