import React, { useContext, useEffect, useState } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import EditRunnerForm from "./EditRunnerForm";

function RunnerShow({ runners, setRunners }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState("")
    const [updateFormData, setUpdateFormData] = useState({
        full_name: "",
        age: "",
        photo: "",
        username: "",
        coach: "",
        event: ""
    });

    useEffect(() => {
        fetch(`/runners/${currentUser.id}`)
        .then((res) => {
            if (res.ok) {
              res.json()
              .then(runner => {
                setUpdateFormData({...updateFormData,
                full_name: runner.full_name,
                age: runner.age,
                photo: runner.photo,
                username: runner.username,
                coach: runner.coach ? runner.coach['full_name'] : null,
                event: runner.event ? runner.event['name'] : null})
              });
            } else {
                res.json().then(json => setErrors([json.error]))
            }
          })
        },[currentUser.id])

        console.log(updateFormData)

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