import React, { useContext } from "react";
import './App.css';
import { UserContext } from '../context/Runner';


function EditRunnerForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext);

        return (
            <div>hi</div>
    )
}

export default EditRunnerForm;