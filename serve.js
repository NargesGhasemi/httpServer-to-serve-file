var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url, true).pathname;
    console.log('pathname: ', pathname);

    const readExt = pathname.substr(pathname.indexOf('.'), pathname.length);
    var ext = "text/html";
    switch (readExt) {
        case '.css':
            ext = 'text/css';
            break;
        case '.js':
            ext = 'text/javascript';
            break;
    }

    const myUrl = pathname.substr(1, pathname.length);
    fs.readFile(myUrl, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.write(err.name);
            res.end();
        }
        res.writeHead(200, { 'Content-Type': ext });
        res.write(data);
        res.end();
    });

}).listen(8080);
