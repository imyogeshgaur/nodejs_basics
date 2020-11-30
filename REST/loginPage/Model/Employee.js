const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "This is a Required Data"],
  },
  email: {
    type: String,
    required: [true, "This is a Required Data"],
    default: "abc@xyz.com",
  },
  phone: {
    type: String,
    minlength: 10,
    required: [true, "This is a Required Data"],
    default: "9999999999",
  },
  department: {
    type: String,
    enum: ["Programming", "Management"],
    default: "Dept",
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, "This is a Required Data"],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

employeeSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  }
});

employeeSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token }); //can be represented as {token} by array destructuring
    await this.save();
    return token;
  } catch (error) {
    console.log("Error Occured!!!");
  }
};
module.exports = Employee = mongoose.model("Employee", employeeSchema);
