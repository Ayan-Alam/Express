const Path = require('path');
const express = require('express');

const router = express.Router();

const rootdir = require('../util/path');

router.get("/contactus",(req,res,next)=>{
    res.sendFile(Path.join(rootdir,"Views","contactus.html"))
    });

router.post("/contactus",(req,res,next)=>{
    res.send("<h1>success</h1>")
})

module.exports = router;