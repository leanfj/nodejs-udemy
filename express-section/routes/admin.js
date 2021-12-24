
const express = require('express')

const path = require('../util/path')

const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
    res.sendFile(path(['views', 'add-product.html']) )    
})

router.post('/add-product', (req, res, next) => {
    products.push({productName: req.body.productName})
    res.redirect('/')
})

exports.routes = router

exports.products = products 