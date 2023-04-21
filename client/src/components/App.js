import './App.css';
import React, { useEffect, useState, useContext } from "react"
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Welcome from './Welcome';
import Runner from './Runner';
import Signup from './Signup';
import Login from './Login';
import RunnerShow from './RunnerShow';
import Coaches from './Coaches';
import CoachesShow from './CoachesShow';
import Events from './Events';
import { UserContext } from '../context/Runner';

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [runners, setRunners] = useState([])
  const [coaches, setCoaches] = useState([])
  const [events, setEvents] = useState([])
  const [errors, setErrors] = useState(false)
  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setCurrentUser(user);
          getRunners();
          getCoaches();
          getEvents();
        });
      }
    })
  },[])

  function getRunners() {
    fetch("/runners")
    .then((res) => {
      if(res.ok){
        res.json().then(setRunners)
      } else {
        res.json().then(json => setErrors([json.error]))
      }
    })
  }

  function getCoaches() {
    fetch("/coaches")
    .then((res) => {
      if(res.ok){
        res.json().then(setCoaches)
      } else {
        res.json().then(json => setErrors([json.error]))
      }
    })
  }

  function getEvents() {
    fetch("/events")
    .then((res) => {
      if(res.ok){
        res.json().then(setEvents)
      } else {
        res.json().then(json => setErrors([json.error]))
      }
    })
  }

  return (
    <main>
        <Header/>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/signup" element={<Signup coaches={coaches} events={events}/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/runners/*" element={<Runner runners={runners} setRunners={setRunners}/>} />
            <Route path="/runners/:id" element={<RunnerShow runners={runners} setRunners={setRunners} coaches={coaches} events={events}/>} />
            <Route path="/coaches" element={<Coaches/>} />
            <Route path="/coaches/:id" element={<CoachesShow/>} />
            <Route path="/events" element={<Events/>} />
          </Routes>
    </main>
  );
}

export default App;