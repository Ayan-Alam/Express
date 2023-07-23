const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/Shop');

app.use(bodyParser.urlencoded({extended:true}));

app.use(adminroutes);
app.use(shoproutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
});


