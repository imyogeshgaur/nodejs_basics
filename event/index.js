const EventClass = require('events');

const event1 = new EventClass();
const event2 = new EventClass();

event1.on("MyEvent1",(fname,lname,age,job)=>{
    console.log("My name is Yogesh Gaur");
});

 event1.on("MyEvent1",(fname,lname,age,job)=>{
    console.log("My age is 19 and job is Web Dev");
});

event1.emit("MyEvent1","Yogesh","Gaur",19,"Web Dev");

event2.on("MyEvent2",(fname,lname,age,job)=>{
    console.log(`My name is ${fname} ${lname}. My age is ${age} and job is ${job}`);
})

event2.emit("MyEvent2","Yogesh","Gaur",19,"Web Dev");
