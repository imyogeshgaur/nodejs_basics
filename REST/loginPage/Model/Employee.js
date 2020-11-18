const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"This is a Required Data"]
    },
    email:{
        type:String,
        required:[true,"This is a Required Data"],
        default:"abc@xyz.com"
    },
    phone:{
        type:String,
        required:[true,"This is a Required Data"],
        minlength:10,
        default:"9999999999"
    },
    department:{
        type:String,
        enum:["Programming","Management"],
        default:"Dept"
    },
    password:{
        type:String,
        minlength:8
    },
    cpassword:{
        type:String,
        minlength:8
    }
});

module.exports = Employee = mongoose.model('Employee',employeeSchema);