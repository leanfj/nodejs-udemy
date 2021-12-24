const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
    res.send('<h1><form action="/admin/add-product" method="POST"><input type="text" name="cadastrar" /><button type="submit">Cadastrar Produto</button></form></h1>')
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router