
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
 
  var e = "404.html";
  var filename = "./";
  switch(req.url){
    case '/':
        filename +="index.html";
        break;
    case '/about':
        filename +="about.html";
        break;
    case '/contact-me':
        filename +="contact-me.html";
        break;
    default:
        filename +="404.html";
  }
  fs.readFile(filename, function(err,data){
    if(err){
          console.log(err);
         res.end();
        }
    
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);