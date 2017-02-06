var log = require('./log');
var exec = require('child_process').exec;
var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
function start(res) {
    log("request handler 'start' was called");
    var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" '+
      'content="text/html; charset=UTF-8" />'+
      '</head>'+
      '<body>'+
      '<form action="/upload" enctype="multipart/form-data" '+
      'method="post">'+
      '<input type="file" name="upload">'+
      '<input type="submit" value="上传图片" />'+
      '</form>'+
      '</body>'+
      '</html>';
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(body);
    res.end();
}
function upload(res, req) {
    log("request handler 'upload' was called");
    var form = new formidable.IncomingForm();
    log("about to parse");
    form.parse(req, function(err, fields, files) {
        log("parsing done");
        var readStream = fs.createReadStream(files.upload.path)
        var writeStream = fs.createWriteStream("/tmp/test.png");
        readStream.pipe(writeStream);
        readStream.on('end', function() {
            fs.unlinkSync(files.upload.path);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('received image:<br/>');
        res.write("<img src='/show' />");
        res.end();
    });
}
function show(res) {
    log("Request handler 'show' was called.");
    fs.readFile('/tmp/test.png', 'binary', function(err, file) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write(err + '\n');
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(file, 'binary');
            res.end();
        }
    })
}
function file(res) {
    fs.readFile('')
}
var reqHandlers = {
    start: start,
    upload: upload,
    show: show
};
module.exports = reqHandlers
