const http = require('http');

var server = http.createServer((req,res)=>{
   if(req.url == '/')
   {
      res.statusCode = 200;
      res.write("<h1>Home Page</h1>");
      console.log(req.url);
   }
   else if(req.url == '/about')
   {
      res.statusCode = 200;
      res.write("<h1>About Page</h1>");
      console.log(req.url);
   }
   else if(req.url == '/contact')
   {
      res.statusCode = 200;
      res.write("<h1>Contact Page</h1>");
      console.log(req.url);
   }
   else
   {
      res.statusCode = 404;
      res.write("<h1>Page Not Found</h1>");
      console.log(req.url);
   }
});

server.listen(5000,'localhost');