import React, { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { UserContext } from '../context/Runner';

function Signup() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        full_name:'',
        username: '',
        email:'',
        password:'',
        age: '',
        photo: '',
        coach_id: '',
        event_id: '',
        admin: false
    })
    const {full_name, username, email, password, age, photo, coach_id, event_id} = formData
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
            event_id
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
                })
            }else {
                res.json().then(json => setErrors([json.error]))
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
            Coach: <input type='text' name='coach_id' value={coach_id} onChange={handleChange} />
            <br/>
            Latest Event: <input type='text' name='event_id' value={event_id} onChange={handleChange} />
            <br/>
            <input type='submit' value='Sign up!' />
        </form>
        {errors ? errors.map(error => <div key={error}>{error}</div>) :null}
        </>
    )
}

export default Signup;