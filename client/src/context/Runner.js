import React, { useEffect, useState } from "react"

const UserContext = React.createContext();

function RunnerProvider({ children }) {
    const [runners, setRunners] = useState({})
    const [errors, setErrors] = useState(false)
    useEffect(() => {
        fetch("/runners")
        .then(res => {
          if(res.ok){
            res.json().then(setRunners)
          }else {
            res.json().then(data => setErrors(data.error))
          }
        })
      },[])
  return (
    <UserContext.Provider value={{ runners, setRunners }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, RunnerProvider };