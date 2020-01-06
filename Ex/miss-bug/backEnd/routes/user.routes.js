const userService = require('../services/user.service.js')

module.exports = (app) => {

    app.get('/api/user', (req, res) => {
        userService.query().then((users) => {
            res.json(users);
        }).catch(err => {
            res.status(500).json({ err })
        })
    })

    app.get('/api/user/:id', (req, res) => {
        if (!req.session.loggedinUser) return res.status(401).json({ message: 'duuuud log in!' })
        userService.getUserById(req.params.id)
            .then((user) => {
                res.json(user);
            })
            .catch(err => {
                res.status(500).json({ err })
            })
    })

    app.post('/api/user/logout', (req, res) => {
        req.session.destroy();
        res.end();
    });

    app.post('/api/user', (req, res) => {
        const loginData = req.body;

        userService.checkCredentials(loginData)
            .then(user => {
                req.session.loggedinUser = user;
                res.json(user);

            })
            .catch(err => {
                res.status(401).json({ err })
            })
    })


    app.post('/api/user/signup', (req, res) => {
        const userData = req.body;

        userService.signUp(userData)
            .then(user => {
                req.session.loggedinUser = user;
                res.json(user);

            })
            .catch(err => {
                res.status(401).json({ err })
            })
    })

    app.delete('/api/user/:id', (req, res) => {
        const loggedinUser = req.session.loggedinUser
        if (!req.session.loggedinUser) return res.status(401).json({ message: 'duuuud log in!' })

        userService.deleteUser(req.params.id)
            .then(() => {
                res.json({ message: 'your user was deleted! go home.' });
            })
            .catch(err => {
                res.status(500).json({ err })
            })
    })
}


