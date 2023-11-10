import React from 'react';
import './Navbar.css';
import { useAuth } from '../login/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onShowCreatePost }) => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className='navbar'>
            <span>National Government</span>
            <button className="create-post-btn" onClick={onShowCreatePost}>Create Post</button>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
