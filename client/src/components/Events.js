import React, { useContext } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import EventCard from "./EventCard";
import EventForm from "./EventForm";

function Events({ events, setEvents }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const eventRender = events.map (event => {
        return (
            <EventCard events={events} event={event} key={event.id} setEvents={setEvents} />
        )
    })

        return (
            <div>
                <EventForm events={events} setEvents={setEvents}/>
                <div>{eventRender}</div>
            </div>
    )
}

export default Events;