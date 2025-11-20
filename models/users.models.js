const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
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