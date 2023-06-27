const mongoose = require('mongoose')
// const productModal = require('../modals/component.modal')

mongoose.connect('mongodb://127.0.0.1:27017/inventory').then(()=>{
    console.log("connection established")
}).
  catch(error => console.log(error));

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

const productModal = mongoose.model('product', productSchema)


  // a document instance
  var product = new productModal({productId:123,quantity:10,operation:"add"});
 
  // save model to database
  mongoose.save(product).then((res)=>{
      console.log(res)
  })


