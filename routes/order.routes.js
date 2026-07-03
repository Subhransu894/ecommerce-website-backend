const express = require("express")
const router = express.Router()
const {createOrder,getOrders}=require("../controller/order.controller")
const auth = require("../middleware/auth.middleware")

//create new order
router.post("/",auth,createOrder)

router.get("/",auth,getOrders)

module.exports = router;