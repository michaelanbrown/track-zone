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

    function handleRunnerChange(e) {
        e.preventDefault();
        fetch(`runners/${id}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            if(res.ok){
              res.json().then(setRunners)
              .then(setFormData({
                full_name: "",
                age: "",
                photo: "",
                username: "",
                coach: "",
                event: ""
            }))
            } else {
              res.json().then(json => setErrors([json.error]))
            }
    })}

        return (
            <div>hi</div>
    )
}

export default EditRunnerForm;