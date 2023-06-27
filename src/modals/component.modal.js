
const mongoose = require('mongoose')
const productSchema = require('../schema/product.schema')

const products = mongoose.model('product', productSchema);

