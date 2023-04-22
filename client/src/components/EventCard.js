import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';

function EventCard( {  }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

        return (
            <div>Event
            </div>
    )
}

export default EventCard;