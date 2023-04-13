import './App.css';
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Welcome from './Welcome';
import Runner from './Runner';

function App() {
  const [runners, setRunners] = useState({})

  useEffect(() => {
    fetch("/runners")
    .then(r => r.json())
    .then(data => {
      setRunners(data);
    })
  }, [])

  return (
    <div class="Welcome">
        <Header />
        <br/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/runners" element={<Runner/>} />
          <Route path="/runners/*" element={<RunnerShow/>} />
          <Route path="/coaches" element={<Coaches/>} />
          <Route path="/coaches/*" element={<CoachesShow/>} />
          <Route path="/events" element={<Events/>} />
        </Routes>
    </div>
  );
}

export default App;