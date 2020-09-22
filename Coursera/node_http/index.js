// const http = require('http');

// const fs = require('fs')

// let read = fs.readFileSync('l.txt','utf-8');
// console.log(read)
// // read = read.replace('friends','students'); //replacr the string
// // console.log(read) 
// // read = read.concat(" and I am a good boy") //concatinate the string
// // console.log(read)
// // read = read.fontcolor("Red") //assign the color
// // console.log(read)
// // read = read.fontsize(59)  //increase the size
// // console.log(read)
// // read = read.toLowerCase()  //convert to lowercase
// // console.log(read)
// // read = read.search("hello")  //serch index of the starting letter else return -1 (caseSensetive)
// // console.log(read)
// // read = read.link="https://google.com"  //return the link 
// // console.log(read)
// // read = read.big() //big element 
// // console.log(read)
// // read = read.substring(0,23)  //return the substring from 0 to 23 index
// // console.log(read)
// // let write = fs.writeFileSync("yogesh.txt",read)
// // console.log("Written")
// // let write = fs.writeFileSync("y.txt",read)
// // console.log("Written")



// const hostname = 'localhost';
// const PORT = 3010;

// const server = http.createServer((request,response)=>{
//     console.log(request.headers);
//     response.statusCode = 200;
//     response.setHeader('Content-Type','text/html');
//     response.end(`<html><body><a>${read}</a></body></html>`);
// }).listen(PORT,hostname,()=>{
//     console.log(`server is running at http://${hostname}:${PORT}`);
// });


const http  = require('http');
const fileSystem = require('fs')

const hostname ='localhost';
const PORT = 80;

const home  = fileSystem.readFileSync('index.html');
const about = fileSystem.readFileSync('about.html');
const services = fileSystem.readFileSync('services.html');
const contact = fileSystem.readFileSync('contact.html');

const server = http.createServer((request,response)=>{
    url = request.url

    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');

    if(url=='/')
    {
        response.end(home);
    }
     else if(url=='/about')
    {
       response.end(about)
    }
    else if(url=='/services')
    {
        response.end(services);
    }
    else if(url=='/contact')
    {
        response.end(contact)
    }
    else
    {
        response.statusCode=404
        response.end(`<h1>404</h1>`)
    }

}).listen(PORT,hostname,()=>{console.log(`Server is running at http://${hostname}:${PORT}`)});