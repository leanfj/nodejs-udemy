const express = require('express')

const path = require('../util/path')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.sendFile(path(['views', 'shop.html']))
})

module.exports = router