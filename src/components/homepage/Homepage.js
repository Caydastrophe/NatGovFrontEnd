import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import Posts from '../post/Post';
import CreatePost from '../post/CreatePost';
import { useAuth } from '../login/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const [refreshPosts, setRefreshPosts] = useState(false);
  const { token } = useAuth(); 
  const navigate = useNavigate(); 
  const [showCreatePost, setShowCreatePost] = useState(false);

  console.log(token);
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!token) {
      // Adjust the path to your login route
      navigate('/login'); 
    }
  }, [token, navigate]);

  // Function to close the modal
  const closeModal = () => setShowCreatePost(false);

  // Close modal when clicking outside of it
  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal();
    }
};

// Close modal with Escape key
useEffect(() => {
    const handleEscape = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
        document.removeEventListener('keydown', handleEscape);
    };
}, []);


  const handlePostCreated = () => {
    // Toggle to trigger re-fetching posts
    setRefreshPosts(refreshPosts); 
  };

  return (
    <div className="homepage-container">
        <Navbar onShowCreatePost={() => setShowCreatePost(true)} />
        {showCreatePost && (
                <div className="modal-overlay" onClick={handleClickOutside}>
                    <div className="create-post-modal">
                        <CreatePost onPostCreated={handlePostCreated} />
                    </div>
                </div>
            )}
        <Posts key={refreshPosts}/>
    </div>
);
};

export default Homepage;
