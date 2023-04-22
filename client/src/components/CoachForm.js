import React, { useContext } from 'react';
import './App.css';
import { UserContext } from '../context/Runner';

function CoachForm( {  }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

        return (
            <div>Coach Form</div>
    )
}

export default CoachForm;