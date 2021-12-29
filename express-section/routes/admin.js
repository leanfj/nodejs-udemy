
const express = require('express')

const path = require('../util/path')

const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
    res.render('add-product.ejs', {pageTitle: 'Adicionar Produto'} )    
})

router.post('/add-product', (req, res, next) => {
    products.push({productName: req.body.productName})
    res.redirect('/')
})

exports.routes = router

exports.products = products 