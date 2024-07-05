const mongoose=require("mongoose");
const config=require("config");
const debug=require("debug")("development:mongoose");
// to use this run this cmd in terminal before running live server
// export DEBUG=development:*
// this cmd shows all texts prints output belonging to namespace "development"

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    debug("connected");
})
.catch(function(err){
    debug(err);
});


module.exports=mongoose.connection;
