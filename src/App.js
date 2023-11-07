import React, { useEffect, useState } from "react";
import './App.css';
import SignUp from "./components/signup/Signup";
import Posts from "./components/post/Post";

const App = () => {
  
  return (
    <div className="body">
      <div className="App">
        <SignUp />
      </div>
      <div className="Main">
        <Posts/> 
      </div>
    </div>
  );
};

export default App;
