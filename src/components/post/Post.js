// src/components/Posts.js

import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://localhost:3002/api/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.imgUrl} alt={post.caption} />
            <h2>{post.caption}</h2>
            <p>Likes: {post.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
