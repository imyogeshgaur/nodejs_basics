const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/employee", {
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