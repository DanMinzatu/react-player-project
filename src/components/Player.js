import React from "react"
import {useState} from 'react'
import {getAuthToken} from "../services/authService";
import {spotifyApi} from '../services/authSpotify'

function Player() {
    const [track, setTrack] = useState('');

    const handleChange = event => {
        setTrack(event.target.value);
        console.log('value is:', event.target.value);
    };

    const handleSearchTrack = event => {
        if (event.key === 'Enter') {
            setTrack(event.target.value);
            console.log('search track:', event.target.value);
            spotifyApi.searchTracks('track:' + track).then(function (data) {
                console.log(`Response tracks for ${track}`, data.body);
            }, function (err) {
                console.log('Something went wrong!', err);
            });
        }
    };

    return (
        <div>
            <p>Player Page</p>
            <label>Search Track</label>
            <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                onKeyDown={handleSearchTrack}
                value={track}
            />
        </div>
    );
}

export default Player
