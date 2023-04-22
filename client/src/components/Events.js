import React from "react";
import './App.css';
import EventCard from "./EventCard";
import EventForm from "./EventForm";

function Events({ events, setEvents }) {

    const eventRender = events.map (event => {
        return (
            <EventCard event={event} key={event.id}/>
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