import SpotifyWebApi from "spotify-web-api-node";

const credentials = {
    clientId: "f1863cf3c57e4ada8b92608a497f87d5",
    clientSecret: "1929e4d05715484187a5fb1ad0f3945c",
    redirectUri: "http://localhost:3000/dashboard",
};

const spotifyApi = new SpotifyWebApi(credentials)

const getToken = async () => {
    var details = {
        'grant_type': 'client_credentials'
    };

    var formBody = [];
    for (const property in details) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const accessData = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + (window.btoa(credentials.clientId + ':' + credentials.clientSecret)),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    })
    const accessToken = await accessData.json()
    return accessToken
}

const setToken = (token) => {
    spotifyApi.setAccessToken(token);
}

export { getToken, setToken, spotifyApi }
