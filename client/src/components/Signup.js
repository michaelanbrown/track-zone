import React, { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { UserContext } from '../context/Runner';

function Signup({ getRunners, getCoaches, getEvents }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        full_name:'',
        username: '',
        email:'',
        password:'',
        age: '',
        photo: '',
        coach_id: 34,
        event_id: 1,
        admin: ''
    })
    const {full_name, username, email, password, age, photo, coach_id, event_id, admin} = formData
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault()
        const user = {
            full_name,
            username,
            email,
            password,
            age,
            photo,
            coach_id,
            event_id,
            admin
        }   
        fetch(`/runners`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setCurrentUser(user)
                    navigate(`/runners/${user.id}`)
                    getRunners();
                    getCoaches();
                    getEvents();
                })
            }else {
                res.json().then(json => setErrors(json.errors))
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
            Username: <input type='text' name='username' value={username} onChange={handleChange} />
            <br/>
            Email: <input type='text' name='email' value={email} onChange={handleChange} />
            <br/>
            Password: <input type='password' name='password' value={password} onChange={handleChange} />
            <br/>
            <br/>
            <br/>
            <br/>
            Tell us more about yourself!
            <br/>
            <br/>
            Full Name: <input type='text' name='full_name' value={full_name} onChange={handleChange} />
            <br/>
            Age: <input type='text' name='age' value={age} onChange={handleChange} />
            <br/>
            Photo Link: <input type='text' name='photo' value={photo} onChange={handleChange} />
            <br/>
            <input type='submit' value='Sign up!' />
        </form>
        { errors ? <br/> : null }
        { errors ? errors.map(error => <div className='error' key={error}>{error}</div>) :null }
        </>
    )
}

export default Signup;