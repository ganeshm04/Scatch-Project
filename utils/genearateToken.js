const jwt=require("jwt");

const generateToken=(user)=>{
    return jwt.sign({email:CreatedUser.email,id:CreatedUser._id},process.env.JWT_KEY);
}



module.exports.generateToken=this.generateToken;

