import React, { useState } from 'react';
import './App.css';

function EventForm({ events, setEvents }) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name:'',
        distance: '',
        unit_of_measurement: ''
    })
    const {name, distance, unit_of_measurement} = formData

    function onSubmit(e){
        e.preventDefault()
        const event = {
            name,
            distance,
            unit_of_measurement
        }   
        fetch(`/events`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(event)
        })
        .then(res => {
            if(res.ok){
                res.json().then(event => {
                    setEvents([...events, event])
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })  
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

        return (
            <> 
            <form onSubmit={onSubmit}>
                Name: <input type='text' name='name' value={name} onChange={handleChange} />
                <br/>
                Distance: <input type='text' name='distance' value={distance} onChange={handleChange} />
                <br/>
                Unit of Measurement: <input type='text' name='unit_of_measurement' value={unit_of_measurement} onChange={handleChange} />
                <br/>
                <input type='submit' value='Create an Event!' />
            </form>
            { errors ? <br/> : null }
            { errors ? errors.map(error => <div className='error' key={error}>{error}</div>) :null }
            </>
    )
}

export default EventForm;