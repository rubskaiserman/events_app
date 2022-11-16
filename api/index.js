const express = require('express')
const database = require('./database.js')
const password = require('./password.js')

const app = express()
const port = 3000

app.use(express.json()); 

app.post('/signup', async (req, res)=> {
    user = {
        id: req.body.email,
        email: req.body.email,
        name: req.body.name,
        password: await password.encripter(req.body.password)
    }
    result = await database.saveUser(user)
    res.send(result)
});

app.post('/login', (req, res)=> {
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})