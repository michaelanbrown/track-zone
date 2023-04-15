import React, { useContext } from "react";
import './App.css';
import { UserContext } from '../context/Runner';

function RunnerShow() {
    const { runners, setRunners } = useContext(UserContext);
    console.log(runners)

        return (
            <div>RunnerShow</div>
    )
}

export default RunnerShow;