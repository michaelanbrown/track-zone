import React, { useContext } from 'react';
import './App.css';
import RunnerCard from './RunnerCard';
import { UserContext } from '../context/Runner';

function Runner({ runners, setRunners }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    
    const runnerRender = runners.map (runner => {
        return (
            <RunnerCard runners={runners} runner={runner} key={runner.id} setRunners={setRunners} />
        )
    })

        return (
            <div>{ runners ? runnerRender : null }</div>
    )
}

export default Runner;