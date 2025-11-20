const mongoose = require("mongoose")
const itemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    qty:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    items:[itemSchema],
    address:{
        fullAddress:String,
        pincode:String,
    },
    totalAmount:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        default:"Placed",
    },
    date:{
        type:Date,
        default:Date.now()
    },
},{timestamps:true})
const Order = mongoose.model("Order",orderSchema);
module.exports=Order;