import axios from 'axios';
const USER_URL = 'http://localhost:3002/api/user/';
const KEY = 'loggedinUser';
const Axios = axios.create({
    withCredentials: true
  });
  

export default {
    checkCredentials,
    getLoggedinUser,
    logout,
    signUp,
    query,
    getUserById,
    deleteUser
}

function query() {
    return Axios.get(USER_URL).then(res => res.data)
}


function getLoggedinUser() {
    const user = JSON.parse(localStorage.getItem(KEY));
    return user;
}

function logout() {
    return Axios.post(`${USER_URL}/logout`)
        .then(() => {
            localStorage.clear();
        })
}

function checkCredentials(userName, password) {
    const credentials = { userName, password }
    return Axios.post(USER_URL, credentials)
        .then(res => res.data)
        .then(user => {
            localStorage.setItem(KEY, JSON.stringify(user));
            return user
        })
}
function signUp(userName, password) {
    return Axios.post(`${USER_URL}signup`, { userName, password })
        .then(res => res.data)
        .then(user => {
            localStorage.setItem(KEY, JSON.stringify(user));
            return user
        })
}

function getUserById(userId) {
    return Axios.get(_getUrl(userId)).then(res => res.data);
}

function deleteUser(userId) {
    return Axios.delete(_getUrl(userId)).then(res => res.data);
}

function _getUrl(id) {
    return `${USER_URL}${id}`
}