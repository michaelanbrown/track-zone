import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';

function CoachesCard({ coach, coaches, setCoaches }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

        return (
            <div>Coach</div>
    )
}

export default CoachesCard;