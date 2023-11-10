import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Routes } from "react-router-dom";
import SignUp from "./components/signup/Signup";
import Posts from "./components/post/Post";
import Login from "./components/login/Login";
import { AuthContext, AuthProvider, useAuth } from "./components/login/AuthContext";
import Homepage from "./components/homepage/Homepage";
import CreatePost from "./components/post/CreatePost";
import Navbar from "./components/navbar/Navbar";



const App = () => {
  
  return (
    <AuthProvider>
      <Router>
       
      <Routes>
        <Route path="/" element={<SignUp />}/>  
        <Route path="/login" element={<Login />}/>  
        <Route path="/navbar" element={<Navbar />}/> 
        <Route path="/signup" element={<SignUp />}/>   
        <Route path="/homepage" element={<AuthProvider><Homepage /></AuthProvider>}/> 
        <Route path="/posts" element={<AuthProvider><Posts /></AuthProvider> }/>  
        <Route path="/createpost" element={<AuthProvider><CreatePost /></AuthProvider> }/>
        
      </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
