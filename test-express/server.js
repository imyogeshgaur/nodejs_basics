const express = require('express');
const Model = require('./Models/Client')
const connectDB  = require('./Config/Databse')
const PORT = 4000;
const app = express();

connectDB();
app.use(express.json());

app.get('/', async (req,res)=>{
    try {
        const data = await Model.find();
        res.send(data);
        res.status(200);
       } catch (error) {
           console.log(error.message);
           return res.status(500);
       }
});
app.post('/', async (req,res)=>{
    const newData = new Model(req.body);
    await newData.save();
    res.status(200);
    res.send(newData);
});
app.put('/:name', async (req,res)=>{
    try {
        const updateData = await Model.findByIdAndUpdate(req.params.name,req.body,{new:true,});
        res.send(updateData);
        res.status(200);
    } catch (error) {
        console.log(error.message);
        return res.status(500);
       
   }
}); 
app.delete('/:name', async (req,res)=>{
    try {
        await Gradient.findByIdAndDelete(req.params.name);
        console.log("Deleted !!!");
        res.status(200);
    } catch (error) {
        console.log(error.message);
        return res.status(500);
    }
});

app.listen(PORT,()=>console.log(`Server is Running on: http://localhost:${PORT}`));