import React from 'react';
import './App.css';

function RunnerCard( { runner }) {
    console.log(runner.coach)

        return (
            <div>
                <h1>{runner.full_name}</h1>
                <img className = "RunnerCardImg" src={runner.photo} alt={runner.name} width="40%" height="40%"/>
                <p>Age: {runner.age}</p>
                <br/>
                {/* <p>Coach: {runner.coach}</p> */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
    )
}

export default RunnerCard;