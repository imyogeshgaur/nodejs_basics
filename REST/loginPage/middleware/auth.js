const jwt = require("jsonwebtoken");
const Employee = require("../Model/Employee");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyUser);

    const user = await Employee.findOne({ _id: verifyUser._id });
    console.log(user);
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = auth;
