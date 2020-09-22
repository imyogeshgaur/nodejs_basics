const http = require('http');

const fs = require('fs');

const server = http.createServer((req,res)=>{
  const readStream = fs.createReadStream('yoyo.txt');
  readStream.on('data',(chunk)=>{
    res.end(chunk);
 });
  readStream.on('end',()=>{
     res.end();
  });
  readStream.on('error',(err)=>{
    console.log(err);
    res.end("file not found");
 });
});


server.listen(5000,'localhost');
