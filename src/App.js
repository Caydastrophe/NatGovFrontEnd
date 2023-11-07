import React, { useEffect, useState } from "react";
import './App.css';
import SignUp from "./components/signup/Signup";
import Posts from "./components/post/Post";
import Login from "./components/login/Login";
import { AuthProvider } from "./components/login/AuthContext";

const App = () => {
  
  return (
    <AuthProvider>
    <div className="body">
      <div className="App">
        <SignUp />
      </div>
      <div className="App">
        <Login />
      </div>
      <div className="Main">
        <Posts/> 
      </div>
    </div>
    </AuthProvider>
  );
};

export default App;
