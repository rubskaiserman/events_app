const express = require('express')
const database = require('./database.js')

const app = express()
const port = 3000

app.use(express.json()); 

app.post('/signup', (req, res)=> {
    user = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password  
    }
    res.send(user)
});

app.post('/login', (req, res)=> {
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})