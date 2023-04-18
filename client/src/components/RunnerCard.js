import React from 'react';
import './App.css';

function RunnerCard( { runner }) {
    const runnerUrl = `/runners/${runner.id}`

        return (
            <div>
                <h1>{runner.full_name}</h1>
                <img className = "RunnerCardImg" src={runner.photo} alt={runner.name} width="40%" height="40%"/>
                <p>Age: {runner.age}</p>
                <p>Coach: {runner.coach.full_name}</p>
                <p>Latest Event: {runner.event.name}</p>
                <br/>
                <br/>
                <br/>
            </div>
    )
}

export default RunnerCard;