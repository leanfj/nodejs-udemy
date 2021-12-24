const express = require('express')

const app = express()

app.use(express.urlencoded({extended: false}))

app.use('/add-product', (req, res, next) => {
    res.send('<h1><form action="/product" method="POST"><input type="text" name="cadastrar" /><button type="submit">Cadastrar Produto</button></form></h1>')
})

app.post('/product', (req, res, next) => {
    console.log(req.body)
})

app.use('/', (req, res, next) => {
    res.send('<h1> Hello from express<h1>')
})

app.listen(3000, () => console.log('Server run in http://localhost:3000'))