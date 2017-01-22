var http = require('http');
var url = require('url');
var log = require('./log');
function start(route, handle) {
    function onReq(req, res) {
        var postData = '';
        var pathname = url.parse(req.url).pathname;
        log('Request for' + pathname + 'received.');
        route(handle, pathname, res, req);

    }
    http.createServer(onReq).listen(8888);
    log('Server has started');
}
var server = {
    start: start
};
module.exports = server;
