
const express = require('express')

const path = require('../util/path')

const router = express.Router()

const products = []
const users = []

router.get('/add-product', (req, res, next) => {
    res.render('add-product.ejs', {pageTitle: 'Adicionar Produto', path:'/admin/add-product'} )    
})

router.post('/add-product', (req, res, next) => {
    products.push({productName: req.body.productName})
    res.redirect('/')
})

router.get('/add-user', (req, res, next) => {
    res.render('add-user.ejs', {pageTitle: 'Adicionar Usuário', path:'/admin/add-user'} )    
})


router.post('/add-user', (req, res, next) => {
    users.push({userName: req.body.userName})
    res.redirect('/')
})


exports.routes = router

exports.products = products 
exports.users = users 