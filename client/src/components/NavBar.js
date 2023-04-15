import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './App.css';
import { UserContext } from '../context/Runner';

export default function NavBar ()  {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const handleLogOut = () => {
        fetch(`/logout`, {
          method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            setCurrentUser(false)
          }
        })
      }

    return (
        <nav className="NavBar">
            <NavLink to="/">Welcome</NavLink>
            { currentUser ? null :<br />}
            { currentUser ? null : <NavLink to="/runners/new">Signup</NavLink>}
            <br></br>
            { currentUser ? <button onClick={handleLogOut}>Logout</button> : <button to="/login">Login</button>}
            <br></br>
            <NavLink to="/runners">Runners</NavLink>
            <br></br>
            <NavLink to="/coaches">Coaches</NavLink>
            <br></br>
            <NavLink to="/events">Events</NavLink>
        </nav>
    )
}