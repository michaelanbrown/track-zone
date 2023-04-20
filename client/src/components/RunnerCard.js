import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';

function RunnerCard( { runner }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const adminUser = currentUser.admin ? <h1>{runner.full_name}{' '}<button className="edit">🗑️</button></h1> : <h1>{runner.full_name}</h1>

        return (
            <div>
                {adminUser}
                <br/>
                <img className = "RunnerCardImg" src={runner.photo} alt={runner.full_name} width="40%" height="40%"/>
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