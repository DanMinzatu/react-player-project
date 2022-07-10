import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { loginUrl } from "../spotify";
import { useEffect } from "react";
import { getToken, setToken } from '../services/authSpotify'

const code = new URLSearchParams(window.location.search).get('code')
const useStyles = makeStyles({
    login: {
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        backgroundColor: 'black',

        '& img':{
            width: '50%'
        },

        '& a':{
            padding: '20px',
            borderRadius: '99px',
            backgroundColor: '#1db954',
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
        },

        '& a:hover':{
            backgroundColor:' white',
            borderColor: '#1db954',
            color: '#1db954',
        }
    },
});
function Login() {
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

    const classes = useStyles()
    return (
        <div className={classes.login}>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify-Logo"/>
            <a href={loginUrl}>Ty Music login</a>
        </div>
    )
}

export default Login