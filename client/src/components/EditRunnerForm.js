import React, { useContext, useState } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import { useNavigate, useParams } from 'react-router-dom';

function EditRunnerForm({ runners, setRunners }) {
    const [errors, setErrors] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        full_name: "",
        age: "",
        photo: "",
        username: "",
        coach: "",
        event: ""
    });

    function handleFormChange(e) {
        setFormData({
            ...formData,
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
        setFormData({...formData,
            full_name: formData.full_name,
            age: formData.age,
            photo: formData.photo,
            username: formData.username,
            coach: formData.coach,
            event: formData.event})
    }

    function handleRunnerChange(e) {
        e.preventDefault();
        fetch(`runners/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            if(res.ok){
              res.json().then(setRunners)
              .then(setFormData({
                full_name: formData.full_name,
                age: formData.age,
                photo: formData.photo,
                username: formData.username,
                coach: formData.coach,
                event: formData.event
            }))
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