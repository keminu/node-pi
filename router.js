var log = require('./log');
function route(pathname) {
    log('About to route a request for ' + pathname);
}
var router = {
    route: route
};
module.exports = router;
