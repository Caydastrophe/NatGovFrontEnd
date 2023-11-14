import React, { useState, useContext } from 'react';
import { AuthContext , useAuth } from './AuthContext'; 
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import { useError } from '../error/ErrorContext';
import { ErrorProvider } from '../error/ErrorContext';
import ErrorMessage from '../error/ErrorMessage';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 
    const { login } = useAuth();
    const { showError } = useError();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://localhost:3002/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(showError(data.message || 'Something went wrong' + data.message));
            }

            if (data.token) {
                //console.log("Token:", data.token); 
                //console.log("Username:", username); 
                login(data.token, username); 
                navigate('/homepage'); 
            } else {
                console.error("No token received");
                showError('An error occurred: ');
            }
        } catch (error) {
            console.error('Login error:', error);
            showError('An error occurred: ' + error);
        }
    };

    return (
        <ErrorProvider>
        <ErrorMessage />
        <div className="login-container">
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
        </ErrorProvider>
    );
};

export default Login;
