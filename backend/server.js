const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    console.log('Home Page')
    res.send('<h2>Hello World!!!!</h2>')
    //res.render("index") Only using ejs
});

const memberRouter = require('./routes/members')

app.use('/members', memberRouter)

// Middleware function
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))

