// TASKS 
// 1. CREATE A SIMPLE OBJECT AND CONVERT IT INTO JSON STIRNG
// 2. WRITE THE JSON DATA INTO A NEW FILE 
// 3. READ THE JSON FILE AND CONVERT IT BACK TO JSON OBJRECT

// 1

const myFavYoutubers = [
    {
      name:"Gaurav Chaudhary",
      age:29,
      channel:"Technical Guruji"
    },
    {
      name:"Abhishek Sagar",
      age:26,
      channel:"Technical Sagar"
    },
    {
      name:"Manoj Saru",
      age:38,
      channel:"Technology Gyan"
    },
    {
      name:"Ajay Nagar",
      age:21,
      channel:"CarryMinati"
    },
    {
      name:"Bhuwan Bam",
      age:26,
      channel:"BB Ki Vines"
    },
    {
      name:"Aashish Chanchalani",
      age:26,
      channel:"Aashish Chanchalani Ki Vines"
    },
    {
      name:"Nikhil Anil Sharma",
      age:28,
      channel:"Mumbiker Nikhil"
    },
    {
      name:"Gaurav Taneja",
      age:34,
      channel:"Flying Beast"
    },
]

const jsonData =  JSON.stringify(myFavYoutubers);


//2 

const fs = require('fs');

fs.writeFile('jsondata.json',jsonData,(err)=>{console.log(err)});

//3

fs.readFile('jsondata.json','utf-8',(err,data)=>{
  console.log(data);
  const obj = JSON.parse(data);
  console.log(obj);
})