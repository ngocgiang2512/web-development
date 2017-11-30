var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

  fs.writeFile('textfile.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });
}).listen(8080);
