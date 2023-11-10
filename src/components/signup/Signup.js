import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://localhost:3002/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                alert('Signup successful!');
                // Handle successful signup, like redirecting to a login page or home page
            } else {
                // If the server response wasn't okay, handle errors
                const errorResult = await response.json();
                console.error('Signup failed:', errorResult);
                alert('Signup failed. Please try again later.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred during signup. Please try again later.');
        }
    };

    return (
        <div className="signup-container">
            <div className="form-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
