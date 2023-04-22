import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';
import { Link, Routes, Route } from 'react-router-dom';
import CoachesShow from './CoachesShow';

function CoachesCard({ coach, coaches, setCoaches }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    function deletedCoach(deleted) {
        const updatedCoaches = coaches.filter((coach) => coach.id !== deleted.id)
        setCoaches(updatedCoaches)
    }

    function handleCoachDelete() {
        fetch(`coaches/${coach.id}`, {
            method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            deletedCoach(coach)
          }
        })
      }

    const adminUser = currentUser.admin && coach.age ? <h1>{coach.full_name}{' '}<button className="edit" onClick={handleCoachDelete}>🗑️</button></h1> : (coach.age ? <h1>{coach.full_name}</h1> : null)

        return (
        <div>
            {adminUser}
            {coach.age ? <img className = "RunnerCardImg" src={coach.photo} alt={coach.full_name} width="40%" height="40%"/> : null}
            {coach.age ? <p>Name: {coach.full_name}</p> : null}
            {coach.age ? <p>Age: {coach.age}</p> : null}
            {coach.age ? <br/> : null }
            {coach.age ? <br/> : null }
            {coach.age ? <br/> : null }
        </div>
    )
}

export default CoachesCard;