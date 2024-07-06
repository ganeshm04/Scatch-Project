const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser")
const router = express.Router();
const userModel = require("../models/user-model");
const { generateToken } = require("../utils/generateToken");





module.exports.registerUser =async function (req, res) {
    try {
        let { email, password, fullname,contact } = req.body;
        // joyy {want to study} based validation that all inputs are required
        // mongodb doen't care of missing fields still runs

        let user =await userModel.findOne({ email })
        if (user) return res.status(401).send("something went wrong,user already exits");
        else {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, async function (err, hash) {
                    if (err) return res.send(err.message);
                    else {
                        let CreatedUser = await userModel.create({
                            email,
                            password: hash,
                            fullname,
                            contact,
                        });
                        let token = generateToken(CreatedUser);
                        res.cookie("token", token);
                        // res.send("user created succesfully");
                        res.redirect("/shop")
                    }
                });
            });
        }


    } catch (error) {
        console.log(error.message);
    }
}

module.exports.loginUser =async function (req, res) {
    try {
        let { email, password } = req.body;
        // joyy {want to study} based validation that all inputs are required
        // mongodb doen't care of missing fields still runs

        let user =await userModel.findOne({ email })
        if (!user) return res.status(401).send("something went wrong,incorrect password or username");
        else {
           bcrypt.compare(password,user.password,function(err,result){
            if(result===true){
                let token = generateToken(user);
                res.cookie("token", token);
                // res.send("login successfull");
                res.redirect("/shop")
            }
            else{
                res.send("password is incorrect")
            }
           })
        }


    } catch (error) {
        console.log(error.message);
    }
}


module.exports.logoutUser =async function (req, res) {
    try {
        res.cookie("token","");
        res.redirect("/");
    } catch (error) {
        console.log(error.message);
    }
}

