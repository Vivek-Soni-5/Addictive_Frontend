import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();  // Hook for programmatic navigation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/register",
                formData
            );
            console.log(res.data);
            setSuccessMessage("Registration successful! Please check your email for login details.");
            setErrorMessage('');
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message || "Somethingwent wrong!";
            setErrorMessage(errorMessage);
            setSuccessMessage('');
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login');  // Redirect to the login page
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button onClick={handleLoginRedirect}>Login</button>
        </div>
    );
};

export default Register;
