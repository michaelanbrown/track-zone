import './App.css';
import React, { useEffect, useState } from "react"
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

function App() {
  const [runners, setRunners] = useState({})
  const [errors, setErrors] = useState(false)

  // useEffect(() => {
  //   fetch("/runners")
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(setRunners)
  //     }else {
  //       res.json().then(data => setErrors(data.error))
  //     }
  //   })
  // },[])

  return (
    <div>
        <Header />
        <br/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/runners/new" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/runners" element={<Runner runners={runners}/>} />
          <Route path="/runners/*" element={<RunnerShow/>} />
          <Route path="/coaches" element={<Coaches/>} />
          <Route path="/coaches/*" element={<CoachesShow/>} />
          <Route path="/events" element={<Events/>} />
        </Routes>
    </div>
  );
}

export default App;