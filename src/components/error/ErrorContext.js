import './ErrorContext.css';
import React, { createContext, useState, useContext } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState('');

    const showError = (errorMessage) => {
        setError(errorMessage);
        // Automatically clear error after some time
        setTimeout(() => setError(''), 5000); // Clear after 5 seconds
    };

    const contextValue = {
        error,
        showError
    };

    return (
        <ErrorContext.Provider value={contextValue}>
            {children}
        </ErrorContext.Provider>
    );
};

export const useError = () => {
    return useContext(ErrorContext);
};
