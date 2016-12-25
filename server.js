var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    var time = req.url.slice(1);
    var timeUnix = "";
    var timeNatural = "";

    if(/^[0-9]+$/.test(time)){
        timeUnix = time;
        timeNatural = new Date(timeUnix * 1000);
    }else{
        timeNatural = new Date(time);
        timeUnix = getTime(timeNatural);
    }

    var timestamp = {
        unix: timeUnix,
        natural: timeNatural
    };

    res.end(JSON.stringify(timestamp));

}).listen(8080);