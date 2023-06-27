// const db = require('../database').

exports.getAllproducts = ((req,res)=>{
    return res.json({
        success:true,
        message :"hello from getAllproducts "
    })
})

exports.addProducts = ((req,res)=>{
    return res.json({
        success:true,
        message :"hello from addProducts "
    })
})

