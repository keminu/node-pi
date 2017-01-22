var log = require('./log');
function route(handle, pathname) {
    log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        log('No request handler found for ' + pathname);
        return '404 Not found'
    }
}
var router = {
    route: route
};
module.exports = router;
