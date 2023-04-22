import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';

function EventCard({ event }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

        return (
        <div>
            <li className='eventLis'>{event.name} - {event.distance}{event.unit_of_measurement}</li>
        </div>
    )
}

export default EventCard;