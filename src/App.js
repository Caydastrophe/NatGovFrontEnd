import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Routes } from "react-router-dom";
import SignUp from "./components/signup/Signup";
import Posts from "./components/post/Post";
import Login from "./components/login/Login";
import { AuthProvider, useAuth } from "./components/login/AuthContext";
import { AuthService } from "./components/login/AuthService";
import Navbar from "./components/navbar/Navbar";



const App = () => {
  
  return (
    <AuthProvider>
      <Router>
       
      <Routes>
        <Route path="/" element={<SignUp />}/>  
        <Route path="/signup" element={<SignUp />}/>   
        <Route path="/login" element={<Login />}/>  
        <Route path="/posts" element={<AuthService><Posts /></AuthService> }/>  

        
      </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
