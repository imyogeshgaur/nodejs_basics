const mongoose = require('mongoose');
const url = "mongodb://localhost/test-express";

const connectDb = async()=>{
    try {
        await mongoose.connect(url,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
    } catch (error) {
        console.log("Error :"+error.message);
        process.exit(1);
    }
    
}

module.exports = connectDb;