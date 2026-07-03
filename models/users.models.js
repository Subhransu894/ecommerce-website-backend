const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    phone:String,
    addresses:[
        {
            fullAddress:String,
            pincode:{
                type:String,
                required:true,
            },
        },
    ],
},{timestamps:true})
const User = mongoose.model("User",userSchema)
module.exports = User;