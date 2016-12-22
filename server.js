var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    var timestamp = {
        unix: "John",
        natural: "Snow"
    };

    res.end(JSON.stringify(timestamp));

    console.log(req.url);

}).listen(1337, '127.0.0.1');