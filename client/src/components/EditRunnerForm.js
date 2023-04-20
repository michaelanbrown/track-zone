import React, { useContext, useState } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import { useParams } from 'react-router-dom';

function EditRunnerForm({ runners, setRunners, updateFormData, setUpdateFormData, errors, setErrors, show, setShow }) {
    const { id } = useParams();
    const { currentUser, setCurrentUser } = useContext(UserContext);

    function handleFormChange(e) {
        setUpdateFormData({
            ...updateFormData,
            [e.target.id] : e.target.value
        });
    }

    function updateRunners(updatedRunner) {
        const updatingRunner = runners.map((runner) => {
            if (runner.id === updatedRunner.id) {
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
        fetch(`runners/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(updateFormData)
        }).then((res) => {
            if(res.ok){
              res.json()
              .then(runner => updateRunners(runner))
              .then(setShow(!show))
            } else {
              res.json().then(json => setErrors([json.error]))
            }
    })}


        return (
            <div>
                <form>
                Enter your changes:
                <br/>
                Name: <input type="text" className="recordFormElement" id="full_name" value={updateFormData.full_name} onChange={handleFormChange} placeholder="Purchase Price"/>
                <br/>
                Age: <input type="text" className="recordFormElement" id="age" value={updateFormData.age} onChange={handleFormChange} placeholder="Square Feet"/>
                <br/>
                Photo: <input type="text" className="recordFormElement" id="photo" value={updateFormData.photo} onChange={handleFormChange} placeholder="Garage Spaces"/>
                <br/>
                Username: <input type="text" className="recordFormElement" id="username" value={updateFormData.username} onChange={handleFormChange} placeholder="Flip Status"/>
                <br/>
                Coach: <input type="text" className="recordFormElement" id="coach" value={updateFormData.coach} onChange={handleFormChange} placeholder="Image URL"/>
                <br/>
                Event: <input type="text" className="recordFormElement" id="event" value={updateFormData.event} onChange={handleFormChange} placeholder="Image URL"/>
                <br/>
                <button className='submit'>Submit Changes</button>
                </form>
            </div>
    )
}

export default EditRunnerForm;