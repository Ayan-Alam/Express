const Path = require('path');
const express = require('express');

const router = express.Router();

const rootdir = require('../util/path');

router.get("/",(req,res,next)=>{
    res.sendFile(Path.join(rootdir,"Views","shop.html"))
    });

module.exports = router;
