const User = require("../models/users.models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        //validation
        if(!name || !email || !password){
            return res.status(400).json({message:"All required fields are mandatory"})
        }
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = new User({name,email, password: hashedPassword})
        await user.save()

        res.status(200).json({message:"User registered successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
}
const login = async(req,res)=>{
    try {
        const {email,password} = req.body

        //validation
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"})
        }

        const user =await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid Credentials"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"},
        )
        res.status(201).json({message:"Login Successful",token,user:{id:user._id,name:user.name,email:user.email}})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
}
module.exports={register,login}