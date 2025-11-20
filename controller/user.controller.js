const User = require("../models/users.models")

exports.createUser = async(req,res)=>{
    try {
        const {name,email,phone,addresses} = req.body;
        const newUser = new User({
            name,
            email,
            phone,
            addresses,
        })
        await newUser.save();
        res.status(200).json({message:"User created successfully",user:newUser})
    } catch (error) {
        res.status(500).json({message:"Server Error",error})
    }
}

exports.getAllUsers = async(req,res)=>{
    try {
        const users =await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:"Server Error",error})
    }
}