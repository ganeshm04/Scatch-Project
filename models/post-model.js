const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:String,
    image:String,
    price:String,
    discount:{
        type:Number,
        default:0,
    },
    bgcolor:string,
    panelcolor:string,
    textcolor:string,
});


module.exports=mongoose.model("product",productSchema);