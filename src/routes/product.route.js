const express = require('express')

const router =  express.Router()

router.get('/get-products',require('../controller/product.controller').getAllproducts)

router.post('/add-products',require('../controller/product.controller').addProducts)

module.exports = router