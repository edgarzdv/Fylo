const fs = require('fs')
const utilsService = require('./utils.service')

module.exports = {
    checkCredentials,
    signUp,
    query,
    getUserById,
    deleteUser
};

let gUsers = require('../data/user.json')

function query() {
    return Promise.resolve(gUsers)
}

function getUserById(userId) {
    const user = gUsers.find(user => user._id === userId)

    if (user) return Promise.resolve(user)
    return Promise.reject('wrong ID')
}

function checkCredentials(loginData) {
    const user = gUsers.find(user =>
        user.userName === loginData.userName &&
        user.password === loginData.password);
console.log(loginData);

    if (!user) return Promise.reject('Invalid User/Pass');
    const userToReturn = { ...user };
    delete userToReturn.password;
    return Promise.resolve(userToReturn);
}

function signUp(user) {
    const randId = utilsService.getRandomID()
    const newUser = {
        _id: randId,
        userName: user.userName,
        password: user.password,
        isAdmin: false

    }
    gUsers.push(newUser)
    _saveUsersToFile()

    return Promise.resolve(newUser)
}

function deleteUser(userId) {
    let userIndex = gUsers.findIndex((currUser) => currUser._id === userId)

    if (userIndex === -1) return Promise.reject('Wrong Id');

    gUsers.splice(userIndex, 1);

    _saveUsersToFile()
    return Promise.resolve(true)
}

function _saveUsersToFile() {
    fs.writeFile('data/user.json', JSON.stringify(gUsers, null, 2), () => { console.log('filllle'); });
}
