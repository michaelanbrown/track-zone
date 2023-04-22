import React from 'react';
import './App.css';

function EventCard({ event }) {

        return (
        <div>
            <li className='eventLis'>{event.name} - {event.distance}{event.unit_of_measurement}</li>
        </div>
    )
}

export default EventCard;