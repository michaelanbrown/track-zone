import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';
import { Link, Routes, Route } from 'react-router-dom';
import RunnerShow from './RunnerShow';

function RunnerCard( { runner, runners, setRunners }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

      const eventName = `${runner.event['name']} - ${runner.event['distance']}${runner.event['unit_of_measurement']}`

        return (
            <div>
                <h1>{runner.full_name}</h1>
                <br/>
                <img className = "RunnerCardImg" src={runner.photo} alt={runner.full_name} width="40%" height="40%"/>
                <p>Age: {runner.age}</p>
                <p>Coach: {runner.coach.full_name}</p>
                <p>Latest Event: {eventName}</p>
                {currentUser.id == runner.id ? <><Link to={`${runner.id}`}>View Details</Link>
                  <Routes>
                    <Route path={`runners/${runner.id}`} element={<RunnerShow/>}/>
                  </Routes></> : null}
                <br/>
                <br/>
                <br/>
            </div>
    )
}

export default RunnerCard;