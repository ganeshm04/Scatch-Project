const mongoose=require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/Scatch");

const userSchema=mongoose.Schema({
    username:String,
    fullname:String,
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,

});


module.exports=mongoose.model("user",userSchema);