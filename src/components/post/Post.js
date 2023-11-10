import './Post.css';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../login/AuthContext';

const Posts = () => {
  const {token , user} = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    //console.log("Token:", token); 
    fetch(`https://localhost:3002/api/posts`, {
      method: 'GET',
      // Include headers and authentication token if needed
       headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
       }
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const deletePost = (postId) => {
    //console.log("Token:", token); 
    fetch(`https://localhost:3002/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.ok) {
        setPosts(posts.filter(post => post._id !== postId)); 
      } else {
        throw new Error('Failed to delete the post');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="posts-container">
        {posts.map(post => (
            <div key={post._id} className="post">
                <h2>{post.Title}</h2>
                <p>{post.Details}</p>
                <button onClick={() => deletePost(post._id)}>Delete Post</button>
            </div>
        ))}
    </div>
);
};


export default Posts;
