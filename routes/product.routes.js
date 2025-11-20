const express = require("express");
const router=express.Router()
const {getAllProducts,addProduct,getProductById}=require("../controller/product.controller")

//get all products
router.get("/",getAllProducts);

//get product by id
router.get("/:productId",getProductById);
//create new data - for testing
router.post("/",addProduct);

module.exports = router;