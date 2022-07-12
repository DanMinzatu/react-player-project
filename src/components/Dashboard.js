import React, { useEffect } from "react";
import { spotifyApi, setToken } from "../services/authSpotify"
import Menu from './menu/Menu'
import {Outlet} from "react-router-dom";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  useEffect(() => {
    setToken(token.access_token);
    //here searchbar/navbar
    spotifyApi.searchTracks('artist:Hate')
    .then(function(data) {
      console.log('Search tracks by "Love" in the artist name', data.body);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
    //to here
  }, [])

  console.log(token)

  return (
    <div>
      <p>Dashboard</p>
      <Menu />
      <Outlet />
    </div>
  );
};

export default Dashboard;
