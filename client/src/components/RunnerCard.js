import React from 'react';
import './App.css';

function RunnerCard( { runner }) {

        return (
            <div>
                <h1>{runner.full_name}</h1>
            </div>
    )
}

export default RunnerCard;