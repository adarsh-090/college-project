var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'}); 

    var readstream=fs.createReadStream(__dirname + "/index.html"); 
    var imagepath=fs.createReadStream(__dirname + "/Adarsh.jpeg")
      readstream.pipe(res);
}); 
server.listen(4000);
console.log("server is running on localhost");