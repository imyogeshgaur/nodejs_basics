const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');

const templatesPath =  path.join(__dirname,'./templates');
app.use(express.static(templatesPath))
app.set('view engine','hbs')
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