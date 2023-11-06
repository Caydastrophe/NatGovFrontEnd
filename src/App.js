import React from "react";
import './App.css';
import SignUp from "./components/signup/Signup";
import Feed from "./components/feed/Feed";
import { useState } from "react";

const getPosts = (setPosts) => {
  fetch("/api/bulletinBoards")
  .then((response) => response.json())
  .then((data) => setPosts(data.posts))
  .catch((error) => console.log(error));
}

function App() {

  const [posts, setPosts] = useState([]);
  getPosts(setPosts);

  return (
    <div className="body">
        <div className="App">
          <SignUp />
        </div>
        <div className="Main">
          <Feed post={posts} />
        </div>
      </div>
  );
}

export default App;
