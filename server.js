var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    var timestamp = {
        unix: req.url,
        natural: req.url
    };

    res.end(JSON.stringify(timestamp));
    
}).listen(8080);