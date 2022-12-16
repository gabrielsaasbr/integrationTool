import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoutes from './utils/PublicRoutes';
import { getToken, removeUserSession, setUserSession } from './utils/common';

import Login from './pages/Login';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    /*axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });*/
    if(token){
      setAuthLoading(false);
      setUserSession("1234", "admin");
    }else{
      removeUserSession();
      setAuthLoading(false);
    }
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  const tokenReturn = getToken();
  /*if(tokenReturn) {
    return(
    <BrowserRouter >
      <div className="header">
        <div className=" col-md-2 mx-auto">
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/login">Login</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/dashboard">Dashboard</NavLink>
        </div>
      </div>
    </BrowserRouter>
    )
  };*/
  return (
    <BrowserRouter>
      <div className="header">
        <div className=" col-md-2 mx-auto">
        <NavLink className={({ isActive }) => isActive ? 'active' : '' } to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : '' } to="/login">Login</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : '' } to="/projects">Projects</NavLink>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<Project/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
