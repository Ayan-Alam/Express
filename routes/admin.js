const Path = require('path');
const express = require('express');
const router = express.Router();

const rootdir = require('../util/path');

router.get("/add-product",(req,res,next) => {
    res.sendFile(Path.join(rootdir,"Views","add-product.html"));
}); 

router.post("/add-product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;