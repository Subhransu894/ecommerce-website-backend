const express = require("express")
const router = express.Router()

const {createUser,getAllUsers}=require("../controller/user.controller")
const auth = require("../middleware/auth.middleware") 
router.post("/",createUser)

//get all users
router.get("/",auth,getAllUsers)

module.exports = router;