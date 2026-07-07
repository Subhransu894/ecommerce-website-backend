const express = require("express")
const app=express()
require("dotenv").config()
const cors = require("cors")
const corOption={
    origin:[
        "http://localhost:5173",
        "https://ecommerce-website-frontend-nine-lac.vercel.app/"
    ],
    methods:["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"],
    credentials:true,
}

const {initiallizeDatabase}=require("./db/db.connect")
const User = require("./models/users.models")
const Product = require("./models/product.models")
const Order = require("./models/orders.models")

app.use(cors(corOption))
app.use(express.json())

initiallizeDatabase()

//testing purpose
app.get("/",(req,res)=>{
    res.send("Api is running");
})

//product getAll route
const productRoute = require("./routes/product.routes")
app.use("/api/products",productRoute);

//category route
const categoryRoute = require("./routes/category.routes")
app.use("/api/category",categoryRoute)

//order routes
const orderRoute = require("./routes/order.routes")
app.use("/api/orders",orderRoute)

//user routes
const userRoute = require("./routes/user.route")
app.use("/api/users",userRoute);

//auth routes
const authRoutes = require("./routes/auth.routes")
app.use("/api/auth",authRoutes)

const PORT=3000
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})