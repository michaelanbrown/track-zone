import React, { useContext } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import CoachesCard from "./CoachesCard";
import CoachForm from "./CoachForm";

function Coaches({ coaches, setCoaches }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const coachRender = coaches.map (coach => {
        return (
            <CoachesCard coaches={coaches} coach={coach} key={coach.id} setCoaches={setCoaches} />
        )
    })

        return (
            <div>
                <CoachForm coaches={coaches} setCoaches={setCoaches}/>
                <div>{coachRender}</div>
            </div>
    )
}

export default Coaches;