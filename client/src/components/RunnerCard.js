import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';
import { Link, Routes, Route } from 'react-router-dom';
import RunnerShow from './RunnerShow';

function RunnerCard( { runner, runners, setRunners }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    function deletedRunner(deleted) {
        const updatedRunners = runners.filter((runner) => runner.id !== deleted.id)
        setRunners(updatedRunners)
    }

    function handleRunnerDelete() {
        fetch(`runners/${runner.id}`, {
            method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            deletedRunner(runner)
          }
        })
      }

      const adminUser = currentUser.admin ? <h1>{runner.full_name}{' '}<button className="edit" onClick={handleRunnerDelete}>🗑️</button></h1> : <h1>{runner.full_name}</h1>
      const eventName = `${runner.event['name']} - ${runner.event['distance']}${runner.event['unit_of_measurement']}`

        return (
            <div>
                {adminUser}
                <br/>
                <img className = "RunnerCardImg" src={runner.photo} alt={runner.full_name} width="40%" height="40%"/>
                <p>Age: {runner.age}</p>
                <p>Coach: {runner.coach.full_name}</p>
                <p>Latest Event: {eventName}</p>
                {currentUser.admin || currentUser.id == runner.id ? <><Link to={`${runner.id}`}>View Details</Link>
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