const fs = require("fs");

// Task 1: Make a folder

fs.mkdir('yogesh',(err)=>{console.log('Task 1 done')});

// Task 2: Make a file inside the folder created

fs.writeFile('yogesh/yogesh.txt' ,"Hi My name is Yogesh Gaur",(err)=>{console.log('Task 2 done')});

// Task 3: Append the file and print it's content in console

fs.appendFile('yogesh/yogesh.txt','. I am a coder',(err)=>{console.log('Task 3.1 done')});

const data = fs.readFile('yogesh/yogesh.txt','utf-8',(err,data)=>{console.log('Task 3.2 done'), console.log("Your file data is :",data)});

// Task 4: Rename the file

fs.rename("yogesh/yogesh.txt", "yogesh/mukesh.txt",(err)=>{console.log('Task 4 done')});

// Task 5: Delete The file and folder

fs.unlink('yogesh/mukesh.txt',(err)=>{console.log('Task 5.1 done')});

fs.rmdir('yogesh',(err)=>{console.log('Task 5.2 done')});