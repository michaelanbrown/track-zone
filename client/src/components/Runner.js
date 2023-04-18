import React from 'react';
import './App.css';
import RunnerCard from './RunnerCard';

function Runner({ runners }) {
    console.log(runners)
    
    const runnerRender = runners.map (runner => {
        return (
            <RunnerCard runners={runners} runner={runner} key={runner.id} />
        )
    })

        return (
            <div>{ runners ? runnerRender : null }</div>
    )
}

export default Runner;