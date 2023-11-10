import React, { useState, useContext } from 'react';
import { useAuth } from '../login/AuthContext';

const CreatePost = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const { token, user } = useAuth();


    const handleSubmit = async (e) => {
       //console.log("Token:", token); 
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:3002/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    // Ensure you have a function to generate a unique ID
                    id: user, 
                    Title: title,
                    Details: details
                }),
            }); 
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            //onPostCreated(); // Callback to update the list of posts in the parent component
            setTitle('');
            setDetails('');
        } catch (error) {
            console.error('Post creation error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Details:</label>
                    <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
