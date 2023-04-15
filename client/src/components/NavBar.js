import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './App.css';
import { UserContext } from '../context/Runner';

export default function NavBar ()  {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    return (
        <nav className="NavBar">
            <NavLink to="/">Welcome</NavLink>
            <br></br>
            <NavLink to="/runners/new">Signup</NavLink>
            <br></br>
            <NavLink to="/login">Login</NavLink>
            <br></br>
            <NavLink to="/runners">Runners</NavLink>
            <br></br>
            <NavLink to="/coaches">Coaches</NavLink>
            <br></br>
            <NavLink to="/events">Events</NavLink>
        </nav>
    )
}