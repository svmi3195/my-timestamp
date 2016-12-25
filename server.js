var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    var time = req.url.slice(1);
    var timeUnix = "";
    var timeNatural = "";

    time = time.replace(/%20/g, ' ');

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if(/^[0-9]+$/.test(time)){
        timeUnix = time;
        var myDate1 = new Date(timeUnix * 1000);
        timeNatural = months[myDate1.getMonth()] + ' ' + myDate1.getDate() + ', ' +  myDate1.getFullYear();
    }else if (Date.parse(time)){
        var myDate2 = new Date(time);
        timeUnix = Date.parse(time)/1000;
        timeNatural = months[myDate2.getMonth()] + ' ' + myDate2.getDate() + ', ' +  myDate2.getFullYear();        
    }else{
        timeUnix = null;
        timeNatural = null;
    }

    var timestamp = {
        unix: timeUnix,
        natural: timeNatural
    };

    res.end(JSON.stringify(timestamp));

}).listen(8080);