import React, { useContext, useState } from "react";
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

      const myPage = () => {
        navigate(`/runners/${currentUser.id}`)
      }

    return (
        <nav className="NavBar">
          <br/>
            <NavLink className="active" to="/">Welcome</NavLink>
            { currentUser ? null : <br/> }
            { currentUser ? <br/> : null }
            <button className="bttn" onClick={myPage}>My Page</button>
            { currentUser ? null :<br />}
            { currentUser ? null : <NavLink className="active" to="/signup">Signup</NavLink>}
            { currentUser ? null :<br />}
            { currentUser ? null : <NavLink className="active" to="/login">Login</NavLink>}
            <br></br>
            <NavLink className="active" to="/runners">Runners</NavLink>
            <br></br>
            <NavLink className="active" to="/coaches">Coaches</NavLink>
            <br></br>
            <NavLink className="active" to="/events">Events</NavLink>
            <br></br>
            { currentUser ? <button className="bttn" onClick={handleLogOut}>Logout</button> : null }
            <br/>
        </nav>
    )
}