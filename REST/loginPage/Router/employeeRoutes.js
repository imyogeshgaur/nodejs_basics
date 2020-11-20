const express = require("express");
const Employee = require("../Model/Employee");
const bcrypt = require('bcrypt');

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
    const pass = req.body.passwordOfUser;
    const cpass = req.body.cPassword;
    if (pass === cpass) {
      const newUser = new Employee({
        name: req.body.nameOfUser,
        email: req.body.emailOfUser,
        phone: req.body.phoneOfUser,
        department: req.body.departmentOfUser,
        password: req.body.passwordOfUser,
      });
      await newUser.save();
      res.status(201).render("welcome.hbs");
    }
   else{
       res.status(403).render('signup.hbs');
   }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error Occured !!!");
  }
});
router.post("/login", async (req, res) => {
    try {
        const email = req.body.emailOfUser;
        const password = req.body.passwordOfUser;
        console.log(email);
        const userbyemail = await Employee.findOne({email});
    
        if(bcrypt.compare(password,userbyemail.password)){
            res.status(200).send('welcome.hbs');
        }else{
            res.status(400).send("Invalid Details!!!")
        }
       } catch (error) {
           res.status(500).send('Error Occured in server !!!')
       }
});

module.exports = router;
