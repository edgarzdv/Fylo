import axios from 'axios';
// const BUG_URL = 'http://localhost:3030/api/bug';

const BUG_URL = (process.env.NODE_ENV !== 'development') ? '/api/bug'
               : '//localhost:3000/api/bug';
const Axios = axios.create({
    withCredentials: true
  });
  
export default {
    query,
    deleteBug,
    addBug,
    getBugById,
    editBug,
};



function query(filterBy,page) {
    return Axios.get(`${BUG_URL}/?q=${filterBy.title}&page=${page}`).then(res => res.data)
}

function getBugById(bugId) {
    return Axios.get(_getUrl(bugId)).then(res => res.data);
}


function editBug(bugId, title, description, severity) {
    var bug = { title, description, severity }
    return Axios.put(_getUrl(bugId), bug).then(res => res.data);
}

function addBug(title, description, severity) {
    return Axios.post(BUG_URL, { title, description, severity }).then(res => res.data);
}

function deleteBug(bugId) {
    return Axios.delete( _getUrl(bugId)).then(res => res.data);
}

function _getUrl(id) {
    return `${BUG_URL}/${id}`
}


