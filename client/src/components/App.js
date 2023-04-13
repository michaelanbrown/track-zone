import './App.css';
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Welcome from './Welcome';

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
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome/>} />
        </Routes>
    </div>
  );
}

export default App;