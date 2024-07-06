const express =require("express");
const router=express.Router();
const isLoggedIn=require("../middlewares/isLoggegIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/",function(req,res){
    let error=req.flash("error");
    res.render("index",{error,loggedIn:false});
});
router.get("/shop",isLoggedIn,async function(req,res){
    let products=await productModel.find();
    let success=req.flash("success","Added to Cart");
    res.render("shop",{products,success});
});
router.get("/cart",isLoggedIn,async function(req,res){
    let user=await userModel.findOne({email:req.user.email}).populate("cart");
    const bill=Number(user.cart[0].price)+20 - Number(user.cart[0].discount);
    res.render("cart",{user,bill});
});
router.get("/addtocart/:product_id",isLoggedIn,async function(req,res){
    let user=await userModel.findOne({email:req.user.email});
    user.cart.push(req.params.product_id);
    await user.save();
    res.redirect("/shop");
});



module.exports=router;