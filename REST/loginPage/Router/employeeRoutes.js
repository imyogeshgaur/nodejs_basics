const express = require("express");
const Employee = require("../Model/Employee");

const router = express.Router();

router.get("/", async (req, res) => {
  await res.render("index.hbs");
});
router.get("/index", async (req, res) => {
  await res.render("index.hbs");
});
router.get("/login", async (req, res) => {
  await res.render("login.hbs");
});
router.get("/signup", async (req, res) => {
  await res.render("signup.hbs");
});
router.post("/signup", async (req, res) => {
  try {
    const newEmployee = new Employee({
      name: req.body.employeeName,
      email: req.body.employeeEmail,
      phone: req.body.employeePhone,
      department: req.body.employeeDepartment,
      password: req.body.password,
      cpassword: req.body.cPassword,
    });
    await newEmployee.save();
    res.status(201).render("signup.hbs");
  } catch (error) {
    res.status(500).send("Server Error !!!");
  }
});
router.post("/login", async (req, res) => {
    try {
        const email = req.body.employeeEmail;
        const password = req.body.password;
         
        const userbyemail = await Employee.findOne({email});
    
        if(userbyemail.password === password){
            res.status(200).send('index.hbs');
        }else{
            res.status(400).send("Invalid Details!!!")
        }
       } catch (error) {
           res.status(500).send('Error Occured in server !!!')
       }
});

module.exports = router;
