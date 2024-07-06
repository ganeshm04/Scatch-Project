const express =require("express");
const router=express.Router();

routerr.get("/",function(req,res){
    let error=req.flash("error");
    res.render("index",{error});
});


module.exports=router;