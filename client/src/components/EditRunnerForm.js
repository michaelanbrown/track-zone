import React, { useContext, useState } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import { useNavigate, useParams } from 'react-router-dom';

function EditRunnerForm({ runners, setRunners, updateFormData, setUpdateFormData, errors, setErrors }) {
    const navigate = useNavigate();
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
            } else {
              res.json().then(json => setErrors([json.error]))
            }
    })}

        return (
            <div>
                <form>
                Enter your changes:
                </form>
            </div>
    )
}

export default EditRunnerForm;