import React, { useContext, useState } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import { useParams } from "react-router-dom";

function EditRunnerForm({ runner, setRunner, runners, setRunners, coaches, events, updateFormData, setUpdateFormData, errors, setErrors, show, setShow, runnerChange, setRunnerChange }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { id } = useParams();

    function handleFormChange(e) {
        setUpdateFormData({
            ...updateFormData,
            [e.target.id] : e.target.value
        });
    }

    function handleCoachChange(e) {
        setUpdateFormData({
            ...updateFormData,
            [e.target.id] : document.getElementById('coach_id').value
        });
    }

    function handleEventChange(e) {
        setUpdateFormData({
            ...updateFormData,
            [e.target.id] : document.getElementById('event_id').value
        });
    }

    function updateRunners(updatedRunner) {
        const updatingRunner = runners.map((runner) => {
            if (runner.id === updatedRunner.id) {
                setCurrentUser(currentUser)
                return updatedRunner
            } else {
                return runner
            }
        })
        setRunners(updatingRunner)
        setUpdateFormData({...updateFormData,
            full_name: updateFormData.full_name,
            age: updateFormData.age,
            photo: updateFormData.photo,
            username: updateFormData.username,
            coach_id: updateFormData.coach,
            event_id: updateFormData.event,
            admin: updateFormData.admin})
    }

    function handleRunnerChange(e) {
        e.preventDefault();
        fetch(`${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(updateFormData)
        }).then((res) => {
            if(res.ok){
              res.json()
              .then(runner => {
                updateRunners(runner)
                setRunner({...runner,
                    full_name: runner.full_name,
                    age: runner.age,
                    photo: runner.photo,
                    username: runner.username,
                    coach_id: runner.coach,
                    event_id: runner.event,
                    admin: runner.admin})})
              .then(setShow(!show))
              .then(setRunnerChange(!runnerChange))
            } else {
              res.json().then(json => setErrors(json.errors))
            }
    })}

    const coachOptions = coaches.map(coach => {
        return (<option value={coach.id} key={coach.id}>{coach.full_name}</option>)
    })

    const eventOptions = events.map(event => {
        return (<option value={event.id} key={event.id}>{event.name} - {event.distance}{event.unit_of_measurement}</option>)
    })

        return (
            <div>
                { errors ? errors.map(error => <div className='error' key={error}>{error}</div>) :null }
                { errors ? <br/> : null }
                <form onSubmit={handleRunnerChange}>
                Enter your changes:
                <br/>
                Name: <input type="text" id="full_name" value={updateFormData.full_name} onChange={handleFormChange} placeholder="Full Name"/>
                <br/>
                Age: <input type="text" id="age" value={updateFormData.age} onChange={handleFormChange} placeholder="Age"/>
                <br/>
                Photo: <input type="text" id="photo" value={updateFormData.photo} onChange={handleFormChange} placeholder="Photo"/>
                <br/>
                Username: <input type="text" id="username" value={updateFormData.username} onChange={handleFormChange} placeholder="Username"/>
                <br/>
                Coach: <select id="coach_id" onChange={handleCoachChange} defaultValue={runner.coach_id.id}>
                    {coachOptions}
                </select>
                <br/>
                Event: <select id="event_id" onChange={handleEventChange} defaultValue={runner.event_id.id}>
                    {eventOptions}
                </select>
                <br/>
                <button className='submit'>Submit Changes</button>
                </form>
            </div>
    )
}

export default EditRunnerForm;