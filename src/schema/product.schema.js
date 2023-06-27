const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:"productId is required"
    }
    ,quantity:{
        type:Number,
        required:"quantity is required"
    }
    ,operation:{
        type:String,
        required:"operation value is required"
    }
});

module.exports = productSchema