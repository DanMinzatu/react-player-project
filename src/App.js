import React from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { getToken, setToken } from './services/authSpotify'
import { useEffect } from "react";

const code = new URLSearchParams(window.location.search).get('code')

function App() {

  const storedAccessData = localStorage.getItem('token');
  const accessTokenObj = storedAccessData ? JSON.parse(storedAccessData) : {}

  //logout localStorage.removeItem('token')
  useEffect(() => {
    if(accessTokenObj.access_token){
      setToken(accessTokenObj.access_token);
    }
    else {
      getToken().then(tokenObj => {
        localStorage.setItem('token', JSON.stringify(tokenObj))
        setToken(accessTokenObj.access_token);
      })
    }
  }, [])

  return (
    <div className="app">
      <p>Login</p>
      {code ? <Dashboard code={code} /> : <Login />}
      <Dashboard token={accessTokenObj}/>
    </div>
  );
}

export default App;
