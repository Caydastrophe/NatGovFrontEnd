import React, { useState, createContext, useContext } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    // Initialize the token state with the token from localStorage
    const [token, setAuthToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const login = (authToken, user) => {
        localStorage.setItem('token', authToken); // Store token in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        setAuthToken(authToken);
        setUser(user);
    };
    
    const logout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setAuthToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{  token, user, setAuthToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
