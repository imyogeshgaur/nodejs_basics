const mongoose = require("mongoose");
require('dotenv').config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_NAME, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected Sucessfully !!!");
  } catch (error) {
    console.log("Error Occured in Connection !!");
  }
};

module.exports = connectDb;