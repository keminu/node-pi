var log = require('./log');
function start() {
    log("request handler 'start' was called");
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(5000);
    return 'Hello Start'
}
function upload() {
    log("request handler 'upload' was called");
    return 'Hello Upload'
}
var reqHandlers = {
    start: start,
    upload: upload
};
module.exports = reqHandlers
