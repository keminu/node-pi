var server = require('./server');
var router = require('./router');
var reqHandlers = require('./reqHandlers');
var handle = {
    '/': reqHandlers.start,
    '/start': reqHandlers.start,
    '/upload': reqHandlers.upload
};
server.start(router.route, handle);
