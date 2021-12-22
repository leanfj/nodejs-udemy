const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log("In the first middleware")
    next()
})

app.use((req, res, next) => {
    console.log("In the second middleware")
    res.send('<h1> Hello from express<h1>')
})

app.listen(3000, () => console.log('Server run in http://localhost:3000'))