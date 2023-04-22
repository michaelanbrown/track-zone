import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { UserContext } from '../context/Runner';
import Coaches from './Coaches';

function CoachForm({ coaches, setCoaches }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        full_name:'',
        age: '',
        photo: ''
    })
    const {full_name, age, photo} = formData
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault()
        const coach = {
            full_name,
            age,
            photo
        }   
        fetch(`/coaches`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(coach)
        })
        .then(res => {
            if(res.ok){
                res.json().then(coach => {
                    setCoaches([...coaches, coach])
                    navigate(`/coaches/${coach.id}`)
                })
            } else {
                res.json().then(json => console.log(json))
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
                Name: <input type='text' name='full_name' value={full_name} onChange={handleChange} />
                <br/>
                Age: <input type='text' name='age' value={age} onChange={handleChange} />
                <br/>
                Photo Link: <input type='text' name='photo' value={photo} onChange={handleChange} />
                <br/>
                <input type='submit' value='Create a Coach!' />
            </form>
            { errors ? <br/> : null }
            { errors ? errors.map(error => <div className='error' key={error}>{error}</div>) :null }
            </>
    )
}

export default CoachForm;