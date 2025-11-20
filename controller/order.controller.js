const Order = require("../models/orders.models")

//order create
exports.createOrder = async(req,res)=>{
    try {
        const{items,address,userId}=req.body;
        console.log("REQ BODY =>", JSON.stringify(req.body, null, 2));


        if(!items || items.length===0){
            return res.status(400).json({message:"Cart is empty"})
        }
        if(!address){
            return res.status(400).json({message:"Delivery address is required"})
        }
        // if (!userId) return res.status(400).json({ message: "User ID is required" });

        const totalAmount = items.reduce((sum,itm)=> sum + itm.price * itm.qty,0)

        const newOrder = new Order({
            userId: userId || null,
            items,
            address,
            totalAmount,
        })
        await newOrder.save()
        res.status(200).json({message:"Order placed successfully", order:newOrder})
    } catch (error) {
        console.error("ORDER ERROR:", error);
        res.status(500).json({message:"Server error",error: error.message })
    }
}

exports.getOrders = async(req,res)=>{
    try {
        const order = await Order.find().sort({date: -1})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({err:"Server Error"})
    }
}