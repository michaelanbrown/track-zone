import React, { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { UserContext } from '../context/Runner';

function Signup() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name:'',
        username: '',
        email:'',
        password:'',
        age: '',
        photo: '',
        coach: '',
        event: '',
        admin: false
    })
    const {name, username, email, password, age, photo, coach, event} = formData
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            username,
            email,
            password,
            age,
            photo,
            coach,
            event
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
            <label>
            Username
            </label>  
            <input type='text' name='name' value={name} onChange={handleChange} />
        
            <label>
            Email
            </label>
            <input type='text' name='email' value={email} onChange={handleChange} />
        
            <label>
            Password
            </label>
            <input type='password' name='password' value={password} onChange={handleChange} />
            
        
            <input type='submit' value='Sign up!' />
        </form>
        {errors ? errors.map(error => <div key={error}>{error}</div>) :null}
        </>
    )
}

export default Signup;