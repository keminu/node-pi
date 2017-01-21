var http = require('http');
var url = require('url');
var log = require('./log');
function start(route) {
    function onReq(req, res) {
        var pathname = url.parse(req.url).pathname;
        log('Request for' + pathname + 'received.');

        route(pathname);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World');
        res.end();
    }
    http.createServer(onReq).listen(8888);
    log('Server has started');
}
var server = {
    start: start
};
module.exports = server;
