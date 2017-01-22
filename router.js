var log = require('./log');
function route(handle, pathname, res, req) {
    log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](res, req);
    } else {
        log("No request handler found for " + pathname);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('404 Not found');
        res.end();
    }
}
var router = {
    route: route
};
module.exports = router;
