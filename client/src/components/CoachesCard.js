import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';

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

    const coachEvents = coach.events.map(event => <li key={event.id}>{event.name} - {event.distance}{event.unit_of_measurement}</li>)

    const adminUser = currentUser.admin ? <h1>{coach.full_name}{' '}<button className="edit" onClick={handleCoachDelete}>🗑️</button></h1> : (coach.full_name != "New Runner - Pick a Coach" ? <h1>{coach.full_name}</h1> : null)

        return (
        <div>
            {adminUser}
            <img className = "RunnerCardImg" src={coach.photo} alt={coach.full_name} width="40%" height="40%"/>
            <p>Name: {coach.full_name}</p>
            <p>Age: {coach.age}</p>
            <p>{coachEvents}</p>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default CoachesCard;