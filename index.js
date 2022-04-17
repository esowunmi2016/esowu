var http = require('http')

http.createServer(function(req, res){
  res.write('Holla Mami');
  res.end();
}).listen(8080);

