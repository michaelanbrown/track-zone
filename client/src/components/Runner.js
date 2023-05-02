import React, { useContext } from 'react';
import './App.css';
import RunnerCard from './RunnerCard';
import { UserContext } from '../context/Runner';

function Runner({ runners }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    
    const runnerRender = runners.map (runner => {
        return (
            <RunnerCard runner={runner} key={runner.id}/>
        )
    })

        return (
            <div>{ runners ? runnerRender : null }</div>
    )
}

export default Runner;