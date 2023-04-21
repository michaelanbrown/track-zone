import React, { useContext, useEffect, useState } from "react";
import './App.css';
import { useParams } from "react-router-dom";
import { UserContext } from '../context/Runner';
import EditRunnerForm from "./EditRunnerForm";

function RunnerShow({ runners, setRunners, coaches, events }) {
    const { id } = useParams();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [show, setShow] = useState(false)
    const [errors, setErrors] = useState("")
    const [updateFormData, setUpdateFormData] = useState({
        full_name: "",
        age: "",
        photo: "",
        username: "",
        coach: "",
        event: "",
        admin: ""
    });
    const [runner, setRunner] = useState({
        full_name: "",
        age: "",
        photo: "",
        username: "",
        coach: "",
        event: "",
        admin: ""
    })

    console.log(updateFormData)

    useEffect(() => {
        fetch(`${id}`)
        .then((res) => {
            if (res.ok) {
              res.json()
              .then(runner => {
                setUpdateFormData({...updateFormData,
                full_name: runner.full_name,
                age: runner.age,
                photo: runner.photo,
                username: runner.username,
                coach: runner.coach,
                event: runner.event,
                admin: runner.admin})
                setRunner({...updateFormData,
                    full_name: runner.full_name,
                    age: runner.age,
                    photo: runner.photo,
                    username: runner.username,
                    coach: runner.coach,
                    event: runner.event,
                    admin: runner.admin})
              });
            } else {
                res.json().then(json => setErrors([json.error]))
            }
          })
        },[])


        function showClick() {
            setShow(!show)
        }

        return (
            <div>
                <h1 className = "centering">{runner.full_name}{' '}<button className="edit" onClick={showClick}>✏️</button></h1>
                <img className = "RunnerCardImg" src={runner.photo} alt={runner.full_name} width="40%" height="40%"/>
                <p>Age: {runner.age}</p>
                <p>Coach: { runner.coach ? runner.coach['full_name'] : null }</p>
                <p>Latest Event: { runner.coach ? runner.event['name'] : null }</p>
                <br/>
                <br/>
                <br/>
                {show ? <EditRunnerForm runner={runner} setRunner={setRunner} runners={runners} setRunners={setRunners} coaches={coaches} events={events} errors={errors} setErrors={setErrors} show={show} setShow={setShow} updateFormData={updateFormData} setUpdateFormData={setUpdateFormData}/> : null }
            </div>
    )
}

export default RunnerShow;