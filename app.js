const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const path=require("path");
const expressSession=require("express-session");
const flash=require("connect-flash");

require("dotenv").config();

const ownersRouter=require("./routes/ownersRouter");
const usersRouter=require("./routes/usersRouter");
const productsRouter=require("./routes/produtsRouter");
const indexRouter=require("./routes/index");

const db=require("./config/mongoose-connection");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    expressSession({
        resave:false,
        saveUnitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
)



app.use(flash());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine",'ejs');

app.use("/",indexRouter);
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);


app.listen(3000,function(){
    console.log("server is listening at 3000");
});