import React, { useEffect } from "react";
import { spotifyApi, setToken } from "../services/authSpotify"
import Login from "./Login";

const Dashboard = ({token}) => {

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
    </div>
  );
};

export default Dashboard;