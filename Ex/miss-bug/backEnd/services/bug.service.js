const fs = require('fs')

const utilsService = require('./utils.service.js')

module.exports = {
    deleteBug,
    addBug,
    getBugById,
    editBug,
    query
};


let gBugs = require('../data/bug.json')


function query(filterBy, page) {
    const limit = 4;
    const filterdBugs = filterBy ?
        gBugs.filter(bug => bug.title.toLowerCase().includes(filterBy))
        : gBugs

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex > filterdBugs.length) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    if (startIndex > 0) {
        results.prev = {
            page: page - 1,
            limit: limit
        }
    }

    results.results = filterdBugs.slice(startIndex, endIndex)

    return Promise.resolve(results.results)
}

function getBugById(bugId) {
    const bug = gBugs.find(bug => bug._id === bugId)

    if (bug) return Promise.resolve(bug)
    return Promise.reject('wrong ID')
}

function editBug(id, { title, description, severity }) {
    let bug = gBugs.find(bug => bug._id === id)

    if (!bug) return Promise.reject('Wrong Id');
    bug.title = title
    bug.description = description
    bug.severity = severity

    _saveBugsToFile()

    return Promise.resolve(bug)
}
function addBug(bug, loggedinUser) {
    const randId = utilsService.getRandomID()
    const newBug = {
        _id: randId,
        title: bug.title,
        description: bug.description,
        createdAt: Date.now(),
        creator: loggedinUser
    }
    gBugs.push(newBug)
    _saveBugsToFile()

    return Promise.resolve(newBug)
}


function deleteBug(bugId, loggedinUser) {
    let bugIndex = gBugs.findIndex((currBug) => currBug._id === bugId)

    if (bugIndex === -1) return Promise.reject('Wrong Id');
    if (loggedinUser.userName !==
        gBugs[bugIndex].creator.userName && !loggedinUser.isAdmin) {
        return Promise.reject('Unauthorized user');
    }

    gBugs.splice(bugIndex, 1);

    _saveBugsToFile()
    return Promise.resolve(true)
}

function _saveBugsToFile() {
    fs.writeFile('data/bug.json', JSON.stringify(gBugs, null, 2), () => { console.log('filllle'); });
}




