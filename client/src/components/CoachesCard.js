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

    const adminUser = currentUser.admin && coach.full_name != "New Runner - Pick a Coach" ? <h1>{coach.full_name}{' '}<button className="edit" onClick={handleCoachDelete}>🗑️</button></h1> : (coach.full_name != "New Runner - Pick a Coach" ? <h1>{coach.full_name}</h1> : null)

        return (
        <div>
            {adminUser}
            {coach.full_name != "New Runner - Pick a Coach" ? <img className = "RunnerCardImg" src={coach.photo} alt={coach.full_name} width="40%" height="40%"/> : null}
            {coach.full_name != "New Runner - Pick a Coach" ? <p>Name: {coach.full_name}</p> : null}
            {coach.full_name != "New Runner - Pick a Coach" ? <p>Age: {coach.age}</p> : null}
            {coach.full_name != "New Runner - Pick a Coach" ? <br/> : null }
            {coach.full_name != "New Runner - Pick a Coach" ? <br/> : null }
            {coach.full_name != "New Runner - Pick a Coach" ? <br/> : null }
        </div>
    )
}

export default CoachesCard;