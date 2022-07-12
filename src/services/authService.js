
const getAuthToken = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    return token.access_token;
}

export {getAuthToken}
