import React from 'react';
import { useError } from './ErrorContext';
import './ErrorContext.css';

const ErrorMessage = () => {
    const { error } = useError();

    if (!error) return null;

    return (
        <div className="error-message">
            {error}
        </div>
    );
};

export default ErrorMessage;