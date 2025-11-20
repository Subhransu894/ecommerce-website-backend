const express = require("express")
const router = express.Router();

const {getAllCategory,getCategoryById}=require("../controller/product.controller");
const { route } = require("./product.routes");

router.get("/",getAllCategory)

//find by id
router.get("/:categoryId",getCategoryById);

module.exports=router