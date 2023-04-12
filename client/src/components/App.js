import './App.css';
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    fetch("/runners")
    .then(r => r.json())
    .then(data => {
      setProperties(data);
    })
  }, [end])

  return (
    <div>
        <Header />
        <Routes>
           
        </Routes>
    </div>
  );
}

export default App;