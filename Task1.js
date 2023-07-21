const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("intro to middleware!");
    next();
});

app.use((req,res,next)=>{
    console.log("another middleware!");
    res.send('<h1>Hello frorm express.js</h1>');
});

app.listen(3000);