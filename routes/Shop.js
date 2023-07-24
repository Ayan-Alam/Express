const Path = require('path');
const express = require('express');

const router = express.Router();

router.get("/",(req,res,next)=>{
    res.sendFile(Path.join(__dirname,"../","Views","shop.html"))
    });

module.exports = router;