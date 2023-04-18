import React, { useContext } from "react";
import './App.css';
import { UserContext } from '../context/Runner';

function RunnerShow({ }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

        return (
            <div>hi</div>
    )
}

export default RunnerShow;