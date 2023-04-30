import React, { useContext } from "react";
import './App.css';
import { UserContext } from '../context/Runner';
import EventCard from "./EventCard";
import EventForm from "./EventForm";

function Events({ events, setEvents }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const eventRender = events.map (event => {
        return (
            <div key={event.id}>
            <EventCard event={event} />
            <br/>
            </div>
        )
    })

        return (
            <div>
                <EventForm events={events} setEvents={setEvents}/>
                <br/>
                <br/>
                <div>{eventRender}</div>
            </div>
    )
}

export default Events;