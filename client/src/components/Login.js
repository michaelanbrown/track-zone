import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        full_name: "",
        age: "",
        photo: "",
        coach_id: "",
        event_id: ""
    })

    const {username, password} = formData
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
       
        fetch("/login",{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    navigate(`/runners/${user.id}`)
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
            <div>
                <form onSubmit={onSubmit}>
                    <label>
                    Username
                    </label>
                    <input type="text" name="username" value={username} onChange={handleChange} />
                
                    <label>
                    Password
                    </label>
                    <input type="text" name="password" value={password} onChange={handleChange} />
                
                
                    <input type="submit" value="Log in" />
                </form>
                {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
            </div>
    )
}

export default Login;