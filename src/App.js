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
import Feed from './components/Feed'
import Trending from './components/Trending'
import Player from './components/Player'

function App() {

  const isAuthenticated = localStorage.getItem('token') ? true : false;

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={!isAuthenticated ?
              <Navigate to="/login"/> :
              <Navigate to="/dashboard"/>}
           />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>} onEnter={requireAuth}>
              <Route exact path="/dashboard/feed" element={<Feed/>} onEnter={requireAuth}/>
              <Route exact path="/dashboard/trending" element={<Trending/>} onEnter={requireAuth}/>
              <Route exact path="/dashboard/player" element={<Player/>} onEnter={requireAuth}/>
          </Route>
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
