import React, { useContext, useState } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import { useParams } from "react-router-dom";

function EditRunnerForm({ runner, setRunner, runners, setRunners, updateFormData, setUpdateFormData, errors, setErrors, show, setShow }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { id } = useParams();

    function handleFormChange(e) {
        setUpdateFormData({
            ...updateFormData,
            [e.target.id] : e.target.value
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
            coach: updateFormData.coach,
            event: updateFormData.event})
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
                    coach: runner.coach,
                    event: runner.event})})
              .then(setShow(!show))
            } else {
              res.json().then(json => setErrors([json.error]))
            }
    })}

        return (
            <div>
                <form onSubmit={handleRunnerChange}>
                Enter your changes:
                <br/>
                Name: <input type="text" className="recordFormElement" id="full_name" value={updateFormData.full_name} onChange={handleFormChange} placeholder="Full Name"/>
                <br/>
                Age: <input type="text" className="recordFormElement" id="age" value={updateFormData.age} onChange={handleFormChange} placeholder="Age"/>
                <br/>
                Photo: <input type="text" className="recordFormElement" id="photo" value={updateFormData.photo} onChange={handleFormChange} placeholder="Photo"/>
                <br/>
                Username: <input type="text" className="recordFormElement" id="username" value={updateFormData.username} onChange={handleFormChange} placeholder="Username"/>
                <br/>
                Coach: <input type="text" className="recordFormElement" id="coach" value={updateFormData.coach ? updateFormData.coach['full_name'] : null } onChange={handleFormChange} placeholder="Coach"/>
                <br/>
                Event: <input type="text" className="recordFormElement" id="event" value={updateFormData.event ? updateFormData.event['name'] : null} onChange={handleFormChange} placeholder="Event"/>
                <br/>
                <button className='submit'>Submit Changes</button>
                </form>
            </div>
    )
}

export default EditRunnerForm;