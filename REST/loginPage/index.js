const { Router } = require('express');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const PORT = process.env.PORT||5000;
const templatePath = path.join(__dirname,'./Templates/views');
const partialsPath = path.join(__dirname,'./Templates/partials');
const staticPath = path.join(__dirname,"./public");


app.set('views engine',hbs);
app.set('views',templatePath)
hbs.registerPartials(partialsPath)

//MiddleWares
app.use(express.static(staticPath));
app.use(express.urlencoded({extended:false}));

app.get('/',async(req,res)=>{
    res.render('index.hbs')
});
// app.post('/',async(req,res)=>{});

app.listen(PORT,()=>{console.log("Server is Running !!!")})