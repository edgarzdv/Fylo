const bugService = require('../services/bug.service.js')



module.exports = (app) => {
    app.get('/api/bug', (req, res) => {
        const loggedinUser = req.session.loggedinUser
        if (!loggedinUser) return res.status(401).json({ message: 'duuuud log in!' })

        const page = parseInt(req.query.page)
        const filterBy = req.query.q;

        bugService.query(filterBy, page).then((bugs) => {
            res.json(bugs);
        }).catch(err => {
            res.status(500).json({ err })
        })
    })

    app.get('/api/bug/:id', (req, res) => {

        if (!req.session.loggedinUser) return res.status(401).json({ message: 'duuuud log in!' })
        bugService.getBugById(req.params.id)
            .then((bugs) => {
                res.json(bugs);
            })
            .catch(err => {
                res.status(500).json({ err })
            })
    })

    app.post('/api/bug', (req, res) => {
        if (!req.session.loggedinUser) return res.status(401).json({ message: 'duuuud log in!' })
        const bug = req.body;

        bugService.addBug(bug, req.session.loggedinUser)
            .then((addedBug) => {
                res.json(addedBug);
            })
            .catch(err => {
                res.status(500).json({ err })
            })
    })

    app.delete('/api/bug/:id', (req, res) => {
        const loggedinUser = req.session.loggedinUser
        if (!req.session.loggedinUser) return res.status(401).json({ message: 'duuuud log in!' })

        bugService.deleteBug(req.params.id, loggedinUser)
            .then(() => {
                res.json({ message: 'your bug was deleted! go home.' });
            })
            .catch(err => {
                res.status(500).json({ err })
            })
    })

    app.put('/api/bug/:id', (req, res) => {
        const bug = req.body;

        bugService.editBug(req.params.id, bug).then((bug) => {
            res.json(bug);
        }).catch(err => {
            res.status(500).json({ err })
        })
    })
}
