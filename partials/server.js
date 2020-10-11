const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
const hbs = require('hbs');

const templatesPath =  path.join(__dirname,'./templates/views');
const partialsPath = path.join(__dirname,'./templates/components')
app.use(express.static(templatesPath))
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)
app.set('views',templatesPath);

app.get('/',(req,res)=>{
    res.render('home')
});
app.get('/products',(req,res)=>{
    res.render('products')
});
app.get('/contact',(req,res)=>{
    res.render('contact')
});

app.listen(PORT,console.log(`http://localhost:${PORT}`));