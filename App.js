const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use("/app-product",(req,res,next) => {
   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');
});

app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});

app.use("/",(req,res,next)=>{
    res.send("<h1>main Path</h1>");
    });

app.listen(3000,()=>{
    console.log("server running on port 3000");
});
