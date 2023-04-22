import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';
import { Link, Routes, Route } from 'react-router-dom';
import CoachesShow from './CoachesShow';

function CoachesCard({ coach, coaches, setCoaches }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

        return (
            <div>
            <br/>
            {coach.age ? <img className = "RunnerCardImg" src={coach.photo} alt={coach.full_name} width="40%" height="40%"/> : null}
            {coach.age ? <p>Name: {coach.full_name}</p> : null}
            {coach.age ? <p>Age: {coach.age}</p> : null}
            {currentUser.admin ? <><Link to={`${coach.id}`}>View Details</Link>
              <Routes>
                <Route path={`coaches/${coach.id}`} element={<CoachesShow/>}/>
              </Routes></> : null}
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default CoachesCard;