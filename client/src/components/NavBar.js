import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './App.css';
import { UserContext } from '../context/Runner';

export default function NavBar ()  {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        fetch(`/logout`, {
          method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            setCurrentUser(false)
            navigate(`/`)
          }
        })
      }

    return (
        <nav className="NavBar">
            <NavLink className="inactive" activeclassname="active" to="/">Welcome</NavLink>
            { currentUser ? null :<br />}
            { currentUser ? null : <NavLink className="inactive" activeclassname="active" to="/signup">Signup</NavLink>}
            <br></br>
            { currentUser ? <button className="bttn" onClick={handleLogOut}>Logout</button> : <NavLink className="inactive" activeclassname="active" to="/login">Login</NavLink>}
            <br></br>
            <NavLink className="inactive" activeclassname="active" to="/runners">Runners</NavLink>
            <br></br>
            <NavLink className="inactive" activeclassname="active" to="/coaches">Coaches</NavLink>
            <br></br>
            <NavLink className="inactive" activeclassname="active" to="/events">Events</NavLink>
        </nav>
    )
}