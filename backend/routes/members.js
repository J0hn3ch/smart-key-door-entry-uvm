const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    res.send('Members list')
})

router.get('/new', (req, res) => {
    res.render('members/new')
})

router.post('/', (req, res) => {
    isValid = true
    if (isValid){
        users.push({ firstName: req.body.firstName })
        res.redirect(`/members/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('members/new', { firstName: req.body.firstName })
    }
    console.log(req.body.firstName)
    res.send('Create Member')
})

/*
router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get Member With ID ${req.params.id}`)
    })
    .put()
    .delete()
*/

router.get('/:id', (req, res) => {
    console.log(req.user)
    res.send(`Get Member With ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`Update Member With ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete Member With ID ${req.params.id}`)
})

const users = [{name: "Kyle"}, {name: "Sally"}]
router.param('id', (req, res, next, id) => {
    console.log(users[id])
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router