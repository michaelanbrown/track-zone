import React, { useContext } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import EditRunnerForm from "./EditRunnerForm";

function RunnerShow({ runners, setRunners }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

        return (
            <div>
                <h1 className = "centering">{currentUser.full_name}{' '}<button className="edit">✏️</button></h1>
                <img className = "RunnerCardImg" src={currentUser.photo} alt={currentUser.full_name} width="40%" height="40%"/>
                <p>Age: {currentUser.age}</p>
                <p>Coach: { currentUser.coach ? currentUser.coach['full_name'] : null }</p>
                <p>Latest Event: { currentUser.coach ? currentUser.event['name'] : null }</p>
                <br/>
                <br/>
                <br/>
                <EditRunnerForm runners={runners} setRunners={setRunners}/>
            </div>
    )
}

export default RunnerShow;