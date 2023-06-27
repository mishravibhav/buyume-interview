const express = require('express')

const app = express()

const PORT = 3000

app.use('/components/',require('./src/routes/product.route'))

app.get('/health',(req,res)=>{
    return res.json({
        success: true,
        message:"health check success"
    })
})

app.listen(PORT,()=>{
    console.log(`app is listning at PORT : ${PORT}`)
})