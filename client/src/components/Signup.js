import React, { useState } from 'react';
import './App.css';

function Signup() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })

        return (
            <div>Signup</div>
    )
}

export default Signup;