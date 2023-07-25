const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/Shop');
const contact = require('./routes/contact-us')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminroutes);
app.use(shoproutes);
app.use(contact);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"Views","not-found.html"));
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
});


