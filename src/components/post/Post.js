// https://localhost:3002/api/posts

// src/components/Posts.js

import React, { useEffect, useState } from 'react';

const getToken = () => {
  return localStorage.getItem('token');
}

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch('https://localhost:3002/api/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const token = getToken()
  const deletePost = (postId) => {
    fetch(`https://localhost:3002/api/posts/${postId}`, {
      method: 'DELETE',
      // Include headers and authentication token if needed
       headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
       }
    })
    .then((response) => {
      if (response.ok) {
        // Remove the post from the state
        setPosts(posts.filter((post) => post.id !== postId));
      } else {
        throw new Error('Post could not be deleted');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            {/* <img src={post.imgUrl} alt={post.Title} /> */}
            <h2>{post.Title}</h2>
            <p>Details: {post.Details}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
