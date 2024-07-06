const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cookie=require("cookie-parser")
const router=express.Router();
const userModel=require("../models/user-model");
const {registerUser,loginUser}=require("../controllers/authController")
router.get("/",function(req,res){
    res.send("it working");
});

router.post("/register",registerUser);

router.post("/login",loginUser);


module.exports=router;
