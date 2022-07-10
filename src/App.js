import React from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getToken, setToken } from './services/authSpotify'
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function App() {

  const isAuthenticated = localStorage.getItem('token') ? true : false;

  return (
    // <div className="app">
    //   <p>Login</p>
    //   {code ? <Dashboard code={code} /> : <Login />}
    //   <Dashboard token={accessTokenObj}/>
    // </div>
      <Router>
        <Routes>
         <Route exact path="/" element={!isAuthenticated ? 
              <Navigate to="/login"/> :
              <Navigate to="/dashboard"/>}
          />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>} onEnter={requireAuth}/>
        </Routes>
      </Router>
  );

  function requireAuth(nextState, replace, next) {
    if (!isAuthenticated) {
      replace({
        pathname: "/login",
        state: {nextPathname: nextState.location.pathname}
      });
    }
    next();
  }
}

export default App;
