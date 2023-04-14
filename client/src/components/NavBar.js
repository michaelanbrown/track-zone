import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './App.css';
import { UserContext } from '../context/Runner';

export default function NavBar ()  {

    const { runners, setRunners } = useContext(UserContext);

    // function handleLogin() {
    //   if (user) {
    //     // setUser(null);
    //   } else {
    //     // setUser(defaultUser);
    //   }
    // }

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