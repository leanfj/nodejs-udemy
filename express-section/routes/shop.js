const express = require('express')

const path = require('../util/path')

const adminData = require('./admin')

const router = express.Router()


router.get('/', (req, res, next) => {
    res.render('shop.ejs', { pageTitle: 'Shop Page', prods: adminData.products, users: adminData.users, path: '/' })
})

module.exports = router 