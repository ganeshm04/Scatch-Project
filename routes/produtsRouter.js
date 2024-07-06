const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create", upload.single("image"), async function (req, res) {
    try {
        let { image, name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    let product = await productModel.create({
        image: req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor
    });
    req.flash("success","Product created sucesfully");
    res.redirect("/owners/admin");
    } catch (error) {
        res.send(error.message);
    }
});





module.exports = router;
