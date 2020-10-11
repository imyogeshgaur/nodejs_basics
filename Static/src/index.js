const express = require('express');
const app = express();
const path = require('path');

const staticPath = path.join(__dirname,'../public')
app.use(express.static(staticPath))

app.use()

app.get('/',(req,res)=>{
   res.send('../public/index.html')
});

app.get('/about',(req,res)=>{
   res.send('../public/about.html')
});

app.get('/project',(req,res)=>{
   res.send('../public/portfolio.html')
});

app.get('/contact',(req,res)=>{
   res.send('../public/contact.html')
});
