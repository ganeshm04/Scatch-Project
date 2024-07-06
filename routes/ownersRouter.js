const express=require("express");
const router=express.Router();
const ownerModel=require("../models/owner-model");


router.get("/",function(req,res){
    res.send("it working");
});

if(process.env.NODE_ENV === "development"){
    // console.log("hey from process");
    router.post("/create", async function(req,res){
        let owners=await ownerModel.find();
        if(owners.length>0){
            return res
            .status(503)
            .send("You don't have to create a new owner");
        }
        let {fullname,email,password}=req.body;
        let createdOwner=await ownerModel.create({
            fullname,
            email,
            password,
        })
        res.status(201).send(createdOwner);

        
    });
}


router.get("/admin",function(req,res){
   let success= req.flash("success")
    res.render("createproducts",{success});
    // res.send("hey it's working")
});








module.exports=router;
