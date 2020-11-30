const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
});

employeeSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  }
});

module.exports = Employee = mongoose.model("Employee", employeeSchema);
