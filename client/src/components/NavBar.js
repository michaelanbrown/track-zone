import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

export default function NavBar ()  {


    return (
        <nav className="NavBar">
            <NavLink to="/">Welcome</NavLink>
            <br></br>
            <NavLink to="/users/new">Signup</NavLink>
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