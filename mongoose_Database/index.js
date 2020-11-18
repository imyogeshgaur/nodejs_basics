const mongoose = require("mongoose");
const validator = require("validator");
//Connection

mongoose
  .connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    new: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected Sucessfully"));

//Schema Design

const usersSchema = new mongoose.Schema({
  userId: {
    type: Number,
    default: 0,
    //Built In Validation
    required: [true, "This Field is Required"],
    unique: [true, "No Duplicate Id is allowed"], //This is not a validation
  },
  name: {
    type: String,
    default: "XYZ",
  },
  email: {
    type: String,
    default: "abc@par.xyz",
    // Custom Validation using Validatior Package
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("The Email is Not Valid !!");
      }
    },
  },
  phone: {
    type: Number,
    default: 000,
  },
  message: {
    type: String,
    default: "I am Nothing",
  },
  height: {
    type: Number,
    default: 0,
    //Custom Validation
    validate(value) {
      if (value < 150) {
        throw new Error("The Height not match our Criteria !!!");
      }
    },
  },
});

//Makingh a collection

const userCollection = mongoose.model("Users", usersSchema);

//Creating the Documents

const createDocuments = async () => {
  try {
    const User1 = new userCollection({
      userId: 1,
      name: "Yogesh Gaur",
      email: "yogesh.gaur@gmail.com",
      phone: 9868747635,
      message: "I am a Developer",
      height: 180,
    });
    const User2 = new userCollection({
      userId: 2,
      name: "Mukesh Sharma",
      email: "mukesh.sharma@gmail.com",
      phone: 9765435123,
      message: "I am an Engineer",
      height: 170,
    });
    1;
    const User3 = new userCollection({
      userId: 3,
      name: "Ramesh Kumar",
      email: "ramesh.kumar@gmail.com",
      phone: 9645341209,
      message: "I am a Manager",
      height: 160,
    });
    const User4 = new userCollection({
      userId: 4,
      name: "Suresh Singh",
      email: "suresh.singh@gmail.com",
      phone: 8765326780,
      message: "I am a Scientist",
      height: 150,
    });
    await userCollection.insertMany([User1, User2, User3, User4]);
  } catch (error) {
    console.log(error);
  }
};

createDocuments();

// Reading the Documents

const readDocuments = async () => {
  try {
    const data = await userCollection
      .find({ email: "yogesh@gmail.com" })
      .limit(1);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

readDocuments();

// Update The Document without default Id

const updateDocuments = async (userid) => {
  try {
    await userCollection.updateOne(
      { userId: userid },
      { $set: { name: "Mahesh Kumar", email: "mahesh.kumar@gmail.com" } }
    );
  } catch (error) {
    console.log(error);
  }
};
updateDocuments(4);

// Delete the Data without defailt id

const deleteDocument = async (userid) => {
  try {
     await userCollection.deleteOne({userId:userid});
  } catch (error) {
    console.log(error);
  }
};

deleteDocument();


