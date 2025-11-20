const express = require("express")
const router = express.Router()
const {createOrder,getOrders}=require("../controller/order.controller")

//create new order
router.post("/",createOrder)

router.get("/",getOrders)

module.exports = router;