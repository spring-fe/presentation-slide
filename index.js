var http = require('http')
var parseUrl = require('parseurl')
var send = require('send')

var serv = function(req, res) {
  var path = parseUrl(req).pathname;
  send(req, path, {
    root: '.'
  }).pipe(res)
};

var app = http.createServer(function onRequest (req, res) {
  var path = parseUrl(req).pathname;
  if (path == '/echo') {
    var body = '';
    //console.log('body')
    function A(data){
      return body += data;
    }
    console.log(data)
    req.on('data', A );
    req.on('end', function() {
      /*res.write(`
<!doctype html>
<pre style="font-size:28px">
  ${req.method} ${req.url}
  ${body}
</pre>
      `);*/
      res.end();
    });
  } else {
    serv(req, res);
  }

}).listen(8000)

console.log('Server started at  http://localhost:8000')